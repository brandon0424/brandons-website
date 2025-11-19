const builds = [
  {
    title: "Skedra",
    subtitle: "AI scheduling for assisted living leaders",
    summary:
      "Co-building with Austin Bee to remove paperwork from care managers’ days using principled AI agents that respect human routines.",
    notes: ["Product strategy & GTM", "Customer discovery inside assisted living homes", "Automation experiments with Python & AI"],
  },
  {
    title: "Sandbox Momentum",
    subtitle: "UVU builder track",
    summary:
      "Ship fast, share lessons weekly, and stress-test ideas with fellow founders. Every sprint deepens my operating playbook.",
    notes: ["Weekly founder reviews", "Experiment logs & growth scorecards", "Accountability partners"],
  },
  {
    title: "Personal Operating System",
    subtitle: "Faith, endurance, and learning",
    summary:
      "A living system of scripture study, marathon training, and writing that keeps my optimism sharp and leadership grounded.",
    notes: ["Daily writing & reflection", "Long-run planning rituals", "Book + Audible notes distilled into actions"],
  },
];

export default function Building() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-16 md:gap-16">
        <section className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3rem] text-emerald-300">
    Brandon Smith
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
            I love building.
          </h1>
          <p className="text-lg text-zinc-300">
            These are the systems, products, and communities shaping my craft.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 underline-offset-4 hover:text-white hover:underline"
          >
            ← Back home
          </a>
        </section>

        <section className="space-y-6">
          {builds.map((build) => (
            <article key={build.title} className="space-y-3 border-b border-white/10 pb-8 last:border-none last:pb-0">
              <div>
                <p className="text-sm uppercase tracking-[0.2rem] text-zinc-500">
                  {build.subtitle}
                </p>
                <h2 className="text-3xl font-semibold text-white">{build.title}</h2>
              </div>
              <p className="text-base text-zinc-300">{build.summary}</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                {build.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
