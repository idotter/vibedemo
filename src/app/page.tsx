import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f4ef] text-stone-900 dark:bg-[#0a0908] dark:text-stone-100">
      {/* Sanfter Hintergrund & Licht */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(217,119,87,0.22),transparent),radial-gradient(ellipse_60%_40%_at_100%_50%,rgba(120,113,108,0.12),transparent),radial-gradient(ellipse_50%_35%_at_0%_80%,rgba(217,119,87,0.14),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,146,60,0.15),transparent),radial-gradient(ellipse_55%_40%_at_100%_40%,rgba(168,162,158,0.12),transparent),radial-gradient(ellipse_45%_30%_at_0%_90%,rgba(251,146,60,0.08),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2378716f' fill-opacity='0.35'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 sm:px-10 sm:py-24">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
          Vibedemo
        </p>

        <h1 className="mt-6 font-sans text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl sm:leading-[1.02]">
          <span className="block text-stone-800 dark:text-stone-100">Hallo</span>
          <span className="relative mt-1 inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[#c45c3e] via-[#d97757] to-[#b45309] bg-clip-text text-transparent dark:from-[#fb923c] dark:via-[#fdba74] dark:to-[#fcd34d]">
              Team
            </span>
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-3 w-full skew-y-[-0.5deg] rounded-sm bg-[#d97757]/25 dark:bg-[#fb923c]/20 sm:-bottom-2 sm:h-4"
            />
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone-600 dark:text-stone-400 sm:text-xl">
          Schön, dass ihr da seid. Diese Seite ist der Auftakt für unsere gemeinsame Session — ruhig,
          klar und ohne Ablenkung. Als Nächstes kümmern wir uns um die Datenbank, wenn ihr soweit
          seid.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <span className="inline-flex h-px w-12 bg-stone-300 dark:bg-stone-600" />
          <p className="text-sm text-stone-500 dark:text-stone-500">
            Viel Erfolg und gutes Vibecoding.
          </p>
        </div>

        <footer className="mt-20 border-t border-stone-200/80 pt-8 dark:border-stone-800/80">
          <p className="text-xs text-stone-500 dark:text-stone-500">
            Hinweis für später:{" "}
            <Link
              href="/notes"
              className="font-medium text-[#b45309] underline decoration-[#b45309]/35 underline-offset-4 transition hover:decoration-[#b45309] dark:text-[#fdba74] dark:decoration-[#fdba74]/35 dark:hover:decoration-[#fdba74]"
            >
              Daten-Demo (/notes)
            </Link>{" "}
            — erst nach Supabase-Setup sinnvoll.
          </p>
        </footer>
      </main>
    </div>
  );
}
