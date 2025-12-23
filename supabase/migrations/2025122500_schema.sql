-- =========================================================
-- IETE RVCE Website Database Schema (Supabase / Postgres)
-- =========================================================

-- ---------------------------------------------------------
-- 1) About Section (single row, editable)
-- ---------------------------------------------------------
create table if not exists public.about_section (
    id uuid primary key default gen_random_uuid(),
    headline text not null default 'About IETE RVCE',
    body text not null, -- markdown or plain text
    highlights text[] not null default '{}', -- bullet points
    stats jsonb not null default '[]'::jsonb, -- e.g., [{"label":"Workshops","value":"20+"}]
    image_url text,
    is_published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_about_published on public.about_section (is_published);

-- ---------------------------------------------------------
-- 2) Team Members
-- ---------------------------------------------------------
create table if not exists public.team_members (
id uuid primary key default gen_random_uuid(),
    name text not null,
    role text not null,
    department text,
    year text, -- e.g., "2025-26"
    bio text,
    image_url text,
    linkedin_url text,
    github_url text,
    email text,
    priority int not null default 999, -- lower = higher on page
    is_active boolean not null default true,
    is_published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_team_priority on public.team_members (priority asc);
create index if not exists idx_team_active on public.team_members (is_active);
create index if not exists idx_team_published on public.team_members (is_published);

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------
-- 3) Events
-- ---------------------------------------------------------
create table if not exists public.events (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    slug text unique,
    description text,
    start_time timestamptz not null,
    end_time timestamptz,
    venue text,
    mode text not null default 'in-person' check (mode in ('in-person', 'hybrid', 'online')),
    registration_url text,
    cover_image_url text,
    status text not null default 'upcoming' check (status in ('upcoming', 'past', 'cancelled')),
    is_published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_events_start_time on public.events (start_time desc);
create index if not exists idx_events_status on public.events (status);
create index if not exists idx_events_published on public.events (is_published);

-- ---------------------------------------------------------
-- 4) Membership Section (benefits + CTA links)
-- ---------------------------------------------------------
create table if not exists public.membership_section (
    id uuid primary key default gen_random_uuid(),
    headline text not null default 'Membership',
    body text not null, -- overview text
    benefits text[] not null default '{}', -- bullet list
    eligibility text[] not null default '{}', -- bullet list
    fee_text text, -- optional: "₹___ per year" or "Free"
    cta_label text not null default 'Join IETE RVCE',
    cta_url text, -- e.g., Google Form / portal
    is_published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_membership_published on public.membership_section (is_published);

-- ---------------------------------------------------------
-- 5) Resources (cards/links for students)
-- ---------------------------------------------------------
create table if not exists public.resources (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    description text,
    resource_type text not null default 'link'
    check (resource_type in ('link', 'pdf', 'video', 'drive', 'github', 'other')),
    url text,
    file_url text, -- if you host on Supabase Storage
    tags text[] not null default '{}',
    priority int not null default 999,
    is_published boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists idx_resources_priority on public.resources (priority asc);
create index if not exists idx_resources_published on public.resources (is_published);

-- ---------------------------------------------------------
-- 6) Contact Messages (from Contact Us form)
-- ---------------------------------------------------------
create table if not exists public.contact_messages (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    subject text,
    message text not null,
    source text default 'website',
    created_at timestamptz not null default now()
);

create index if not exists idx_contact_created_at on public.contact_messages (created_at desc);

-- ---------------------------------------------------------
-- updated_at triggers
-- ---------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_events_updated_at on public.events;
create trigger trg_events_updated_at
before update on public.events
for each row execute function public.set_updated_at();

drop trigger if exists trg_team_updated_at on public.team_members;
create trigger trg_team_updated_at
before update on public.team_members
for each row execute function public.set_updated_at();

drop trigger if exists trg_about_updated_at on public.about_section;
create trigger trg_about_updated_at
before update on public.about_section
for each row execute function public.set_updated_at();

drop trigger if exists trg_membership_updated_at on public.membership_section;
create trigger trg_membership_updated_at
before update on public.membership_section
for each row execute function public.set_updated_at();

drop trigger if exists trg_resources_updated_at on public.resources;
create trigger trg_resources_updated_at
before update on public.resources
for each row execute function public.set_updated_at();
