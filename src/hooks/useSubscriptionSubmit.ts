import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
// import { createOrUpdateSubscriber } from "@/integrations/mailerlite/client";
import { isUsingDemoConfig } from "@/config/mailerlite";
import { getPersistedUtm } from "@/lib/utm";

export interface FormData {
	name: string;
	email: string;
	whatsapp: string;
}

export const useSubscriptionSubmit = (
	formData: FormData, 
	validateForm: () => boolean,
	resetForm: () => void
) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const usingDemoConfig = isUsingDemoConfig(); // Sempre será false agora
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		// Validate form
		if (!validateForm()) {
			return;
		}
		setIsSubmitting(true);
		// First, persist to Supabase; only navigate on success
		try {
			const currentUrl = new URL(window.location.href);
			const searchParams = currentUrl.searchParams;
			// Prefer URL params, fallback to first-touch persisted values
			const persisted = getPersistedUtm() || undefined;
			const utm_source = searchParams.get("utm_source") || persisted?.utm_source || undefined;
			const utm_medium = searchParams.get("utm_medium") || persisted?.utm_medium || undefined;
			const utm_campaign = searchParams.get("utm_campaign") || persisted?.utm_campaign || undefined;
			const utm_term = searchParams.get("utm_term") || persisted?.utm_term || undefined;
			const utm_content = searchParams.get("utm_content") || persisted?.utm_content || undefined;
			const gclid = searchParams.get("gclid") || persisted?.gclid || undefined;
			const fbclid = searchParams.get("fbclid") || persisted?.fbclid || undefined;
			const referrer = document.referrer || persisted?.referrer || undefined;
			const page_path = `${window.location.pathname}${window.location.search}` || persisted?.landing_page_path || "/";

			const { error: supabaseError } = await supabase
				.from('leads')
				.insert([
					{ 
						name: formData.name,
						email: formData.email,
						whatsapp: formData.whatsapp,
						source: "lp_projeto_sem_misterio_ago_2025",
						utm_source,
						utm_medium,
						utm_campaign,
						utm_term,
						utm_content,
						gclid,
						fbclid,
						referrer,
						page_path
					}
				]);

			if (supabaseError) {
				console.error("Error submitting form to Supabase:", supabaseError);
				toast({
					title: "Erro ao enviar formulário",
					description: "Por favor, tente novamente mais tarde.",
					variant: "destructive"
				});
				setIsSubmitting(false);
				return;
			}

			// Start MailerLite request first (do not await), then navigate
			const mailerLitePromise = import("@/integrations/mailerlite/client").then(m => m.createOrUpdateSubscriber({
				email: formData.email,
				fields: {
					name: formData.name,
					whatsapp: formData.whatsapp,
					country: "Brazil",
					source: "evento_forma_forca_jun_25"
				}
			}));

			// Navigate immediately after starting MailerLite in background
			navigate("/obrigado");

			// Handle MailerLite errors without blocking the user flow
			mailerLitePromise.catch((mailerLiteError: any) => {
				console.error("Error submitting form to MailerLite:", mailerLiteError);
				toast({
					title: "Aviso",
					description: mailerLiteError?.message?.includes('Rate limit exceeded')
						? "O sistema está com muitas requisições. Sua inscrição foi registrada, mas pode demorar um pouco para receber as comunicações."
						: "Sua inscrição foi registrada",
					variant: "default"
				});
			});
		} catch (err) {
			console.error("Error:", err);
			toast({
				title: "Erro ao enviar formulário",
				description: "Por favor, tente novamente mais tarde.",
				variant: "destructive"
			});
			setIsSubmitting(false);
		}
	};

	return {
		isSubmitting,
		isSubmitted,
		handleSubmit,
		usingDemoConfig
	};
};
