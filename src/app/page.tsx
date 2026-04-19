import Link from "next/link";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/utils/supabase/env";

export default function Home() {
  const supabaseReady = Boolean(getSupabaseUrl() && getSupabaseAnonKey());

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-20">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">Vibecoding-Demo</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Next.js · Vercel · Supabase
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Lokales Repo, Deployment auf Vercel, Postgres und API über die Supabase-Marketplace-Integration.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Status</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-500">Umgebungsvariablen (lokal)</dt>
              <dd>
                {supabaseReady ? (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                    Supabase erkannt
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
                    Noch kein env pull
                  </span>
                )}
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/notes"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              Notes aus Supabase laden
            </Link>
          </div>
        </section>

        <section className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <h2 className="font-semibold text-zinc-900 dark:text-zinc-50">Ablauf nach dem Klonen</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">npx vercel link</code> und Projekt wählen
            </li>
            <li>
              Supabase über Vercel Marketplace mit dem Projekt verbinden, dann{" "}
              <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">npx vercel env pull .env.development.local</code>
            </li>
            <li>
              SQL aus <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">supabase/init-notes.sql</code> im Supabase SQL Editor ausführen
            </li>
            <li>
              <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">npm run dev</code> und{" "}
              <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">/notes</code> prüfen
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
