export type StoredUtmData = {
	utm_source?: string;
	utm_medium?: string;
	utm_campaign?: string;
	utm_term?: string;
	utm_content?: string;
	gclid?: string;
	fbclid?: string;
	referrer?: string;
	landing_page_path?: string;
	captured_at?: string;
};

const UTM_STORAGE_KEY = "utm_data_v1";

const hasAnyUtmOrClickId = (params: URLSearchParams): boolean => {
	return (
		params.has("utm_source") ||
		params.has("utm_medium") ||
		params.has("utm_campaign") ||
		params.has("utm_term") ||
		params.has("utm_content") ||
		params.has("gclid") ||
		params.has("fbclid")
	);
};

export const persistUtmFromUrlOnce = (): void => {
	if (typeof window === "undefined") return;
	try {
		const storedRaw = localStorage.getItem(UTM_STORAGE_KEY);
		const alreadyStored: StoredUtmData | null = storedRaw ? JSON.parse(storedRaw) : null;

		const params = new URLSearchParams(window.location.search || "");
		const anyUtm = hasAnyUtmOrClickId(params);

		// Always capture first landing path/referrer if not present
		if (!alreadyStored?.landing_page_path) {
			const landing_page_path = `${window.location.pathname}${window.location.search}`;
			const referrer = document.referrer || undefined;
			const base: StoredUtmData = {
				landing_page_path,
				referrer,
				captured_at: new Date().toISOString(),
			};
			if (anyUtm) {
				base.utm_source = params.get("utm_source") || undefined;
				base.utm_medium = params.get("utm_medium") || undefined;
				base.utm_campaign = params.get("utm_campaign") || undefined;
				base.utm_term = params.get("utm_term") || undefined;
				base.utm_content = params.get("utm_content") || undefined;
				base.gclid = params.get("gclid") || undefined;
				base.fbclid = params.get("fbclid") || undefined;
			}
			localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(base));
			return;
		}

		// If we already have storage but URL contains fresh UTMs, don't overwrite to preserve first touch
		// However, if there was nothing stored and we do have UTMs now, we stored above.
	} catch (err) {
		// noop
	}
};

export const getPersistedUtm = (): StoredUtmData | null => {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(UTM_STORAGE_KEY);
		return raw ? (JSON.parse(raw) as StoredUtmData) : null;
	} catch {
		return null;
	}
};


