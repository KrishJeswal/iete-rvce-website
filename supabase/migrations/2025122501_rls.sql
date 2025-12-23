-- =========================================================
-- Row Level Security (RLS) Policies
-- Public can read only published site content.
-- Writes are intended via Netlify Functions (service role).
-- =========================================================

alter table public.about_section enable row level security;
alter table public.team_members enable row level security;
alter table public.events enable row level security;
alter table public.membership_section enable row level security;
alter table public.resources enable row level security;
alter table public.contact_messages enable row level security;

-- ABOUT: Public can read published about section
drop policy if exists "Public can read published about section" on public.about_section;
create policy "Public can read published about section"
on public.about_section
for select
to anon, authenticated
using (is_published = true);

-- TEAM: Public can read published & active team members
drop policy if exists "Public can read published team members" on public.team_members;
create policy "Public can read published team members"
on public.team_members
for select
to anon, authenticated
using (is_published = true and is_active = true);

-- EVENTS: Public can read published events
drop policy if exists "Public can read published events" on public.events;
create policy "Public can read published events"
on public.events
for select
to anon, authenticated
using (is_published = true);

-- MEMBERSHIP: Public can read published membership section
drop policy if exists "Public can read published membership section" on public.membership_section;
create policy "Public can read published membership section"
on public.membership_section
for select
to anon, authenticated
using (is_published = true);

-- RESOURCES: Public can read published resources
drop policy if exists "Public can read published resources" on public.resources;
create policy "Public can read published resources"
on public.resources
for select
to anon, authenticated
using (is_published = true);

-- CONTACT_MESSAGES: locked down (no public policies)
-- Intentionally no select/insert/update/delete policies.
-- Netlify Functions using service role key can still insert.
