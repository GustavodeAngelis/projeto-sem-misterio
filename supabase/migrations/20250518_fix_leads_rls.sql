
-- Enable Row Level Security on the leads table if not already enabled
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous inserts to the leads table
CREATE POLICY "Allow anonymous inserts to leads" 
ON public.leads 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to insert into leads table
CREATE POLICY "Allow authenticated users to insert into leads" 
ON public.leads 
FOR INSERT 
TO authenticated
WITH CHECK (true);
