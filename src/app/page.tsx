import Hero3DClient from "@/components/Hero3DClient";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
];

const STATS = [
  { icon: "✓", label: "Habits" },
  { icon: "◎", label: "Goals" },
  { icon: "$", label: "Finances" },
  { icon: "✎", label: "Journal" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070c] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.16),transparent_55%)]"
      />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-wide">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.8)]" />
          TRACKR
        </a>

        <nav aria-label="Primary" className="hidden gap-8 text-sm text-white/70 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#dashboard"
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium backdrop-blur transition hover:border-white/30 hover:bg-white/10"
        >
          Explore Dashboard
        </a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-8 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:pt-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Take control
            <br />
            of your
            <br />
            everyday life.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            A personal tracker that goes beyond spreadsheets — blending
            habits, goals, finances and journaling into one clear,
            interactive dashboard.
          </p>

          <a
            href="#dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-[#05070c] transition hover:bg-sky-300"
          >
            Start Tracking
            <span aria-hidden>→</span>
          </a>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/50">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-xs text-white/70">
                  {stat.icon}
                </span>
                {stat.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[360px] w-full sm:h-[440px] lg:h-[560px]">
          <Hero3DClient />
        </div>
      </section>
    </main>
  );
}
