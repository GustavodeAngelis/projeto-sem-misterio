-- Add UTM/referrer columns to leads table (idempotent)
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS utm_source  TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium  TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign TEXT,
  ADD COLUMN IF NOT EXISTS utm_term    TEXT,
  ADD COLUMN IF NOT EXISTS utm_content TEXT,
  ADD COLUMN IF NOT EXISTS referrer    TEXT,
  ADD COLUMN IF NOT EXISTS page_path   TEXT,
  ADD COLUMN IF NOT EXISTS gclid       TEXT,
  ADD COLUMN IF NOT EXISTS fbclid      TEXT;


