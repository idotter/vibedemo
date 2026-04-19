import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/utils/supabase/env";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const url = getSupabaseUrl();
  const hasKeys = Boolean(url && getSupabaseAnonKey());

  if (!hasKeys) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center gap-4 px-6 py-16">
        <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
          Supabase ist noch nicht konfiguriert.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Nach <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">npx vercel env pull .env.development.local</code>{" "}
          sollten <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">NEXT_PUBLIC_SUPABASE_URL</code> und{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> lokal
          verfügbar sein. Führe die SQL-Datei im Supabase-SQL-Editor aus.
        </p>
        <Link href="/" className="text-sm font-medium text-zinc-900 underline dark:text-zinc-100">
          Zur Startseite
        </Link>
      </div>
    );
  }

  const supabase = await createClient();
  const { data: notes, error } = await supabase.from("notes").select("id, title").order("id");

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Notes (Supabase)</h1>
        <Link href="/" className="text-sm font-medium text-zinc-600 underline dark:text-zinc-400">
          Zurück
        </Link>
      </div>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900 dark:bg-red-950/40 dark:text-red-100">
          <p className="font-medium">Abfrage fehlgeschlagen</p>
          <p className="mt-1 opacity-90">{error.message}</p>
          <p className="mt-3 text-xs opacity-80">
            Liegt oft an fehlender Tabelle oder RLS — siehe <code className="rounded bg-red-100 px-1 dark:bg-red-900/50">supabase/init-notes.sql</code>.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {(notes ?? []).map((row) => (
            <li
              key={String(row.id)}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="font-mono text-xs text-zinc-500">#{row.id}</span>
              <p className="text-zinc-900 dark:text-zinc-50">{row.title}</p>
            </li>
          ))}
        </ul>
      )}

      {!error && (notes?.length ?? 0) === 0 && (
        <p className="text-zinc-600 dark:text-zinc-400">
          Keine Zeilen in <code className="rounded bg-zinc-100 px-1 text-sm dark:bg-zinc-800">notes</code>. SQL-Seed ausführen.
        </p>
      )}
    </div>
  );
}
