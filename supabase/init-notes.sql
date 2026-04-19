-- Im Supabase-Dashboard: SQL Editor → New query → Paste → Run
-- Danach ist /notes mit anon-Key lesbar (nur Demo).

create table if not exists public.notes (
  id bigint primary key generated always as identity,
  title text not null
);

insert into public.notes (title)
values
  ('Heute habe ich ein Supabase-Projekt angelegt.'),
  ('Daten aus Next.js auf Vercel abgefragt.'),
  ('Vibecoding-Setup steht.');

alter table public.notes enable row level security;

drop policy if exists "public can read notes" on public.notes;
create policy "public can read notes"
on public.notes
for select
to anon
using (true);
