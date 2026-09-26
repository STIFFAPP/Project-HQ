-- Project HQ initial Supabase/Postgres schema.
-- Add RLS policies before production use.

create extension if not exists "pgcrypto";

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  category_id uuid references categories(id) on delete set null,
  name text not null,
  description text,
  status text not null default 'idea',
  priority_position integer not null default 0,
  progress integer not null default 0 check (progress between 0 and 100),
  content_type text,
  notion_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  project_id uuid references projects(id) on delete cascade,
  title text not null,
  details text,
  time_bucket text not null default 'backlog'
    check (time_bucket in ('today', 'this_week', 'next_month', 'backlog')),
  position integer not null default 0,
  completed boolean not null default false,
  due_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  project_id uuid references projects(id) on delete cascade not null,
  name text not null,
  quantity numeric not null default 1,
  estimated_cost numeric,
  actual_cost numeric,
  url text,
  status text not null default 'need'
    check (status in ('need', 'ordered', 'received', 'installed')),
  blocking boolean not null default false,
  position integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists content_projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  project_id uuid unique references projects(id) on delete cascade not null,
  video_style text,
  script text,
  thumbnail_notes text,
  editing_notes text,
  created_at timestamptz not null default now()
);

create table if not exists shots (
  id uuid primary key default gen_random_uuid(),
  content_project_id uuid references content_projects(id) on delete cascade not null,
  title text not null,
  details text,
  position integer not null default 0,
  completed boolean not null default false
);

create index if not exists projects_priority_idx
  on projects(user_id, priority_position);

create index if not exists tasks_bucket_position_idx
  on tasks(user_id, time_bucket, position);

create index if not exists purchases_project_status_idx
  on purchases(project_id, status);

-- TODO: enable RLS and add user-owned row policies before deploying.
