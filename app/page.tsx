const highlights = [
  "Skedra · AI scheduling for assisted living teams",
  "UVU Accounting student · Sandbox builder",
  "Mission roots · ENFP optimism",
];

const focuses = [
  "Python, SQL, automation",
  "AI agents & principle-driven systems",
  "Endurance training & leadership reps",
];

const experiences = [
  { role: "Skedra", tag: "Co-founder & Product", period: "2023 — Present" },
  { role: "UVU Sandbox", tag: "Entrepreneurship Fellow", period: "2024 — Present" },
  { role: "LDS Mission", tag: "Team Lead & Teacher", period: "2019 — 2021" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 py-16 md:gap-16">
        <section className="space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm uppercase tracking-[0.3rem] text-emerald-300">
              Brandon Smith
            </p>
            <div className="flex flex-wrap gap-4 text-base font-medium">
              <a
                href="mailto:brandon.smithlf@gmail.com"
                className="rounded-full bg-white px-6 py-3 text-zinc-950 transition hover:bg-zinc-200"
              >
                Say hi
              </a>
              <a
                href="/building"
                className="rounded-full border border-white/30 px-6 py-3 text-white transition hover:border-white"
              >
                Check out my recent projects
              </a>
            </div>
          </div>
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
            I love growth.
          </h1>
          <p className="text-lg text-zinc-300">
            Student. Builder. Author. Entrepreneur. Friend.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.2rem] text-zinc-500">
            Snapshot
          </h2>
          <ul className="space-y-3 text-lg text-zinc-200">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.2rem] text-zinc-500">
            Focus
          </h2>
          <ul className="space-y-2 text-base text-zinc-300">
            {focuses.map((focus) => (
              <li key={focus}>{focus}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="space-y-5">
          <h2 className="text-sm uppercase tracking-[0.2rem] text-zinc-500">
            Experience
          </h2>
          <div className="space-y-3">
            {experiences.map((experience) => (
              <article
                key={experience.role}
                className="flex flex-col gap-1 text-zinc-200 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-lg font-semibold text-white">
                    {experience.role}
                  </p>
                  <p className="text-sm text-zinc-400">{experience.tag}</p>
                </div>
                <p className="text-sm text-zinc-500">{experience.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm uppercase tracking-[0.2rem] text-zinc-500">
            Reach out
          </h2>
          <div className="flex flex-wrap gap-4 text-base text-white">
            <a
              href="mailto:brandon.smithlf@gmail.com"
              className="underline-offset-4 hover:underline"
            >
              brandon.smithlf@gmail.com
            </a>
            <span>·</span>
            <a href="tel:8019018489" className="underline-offset-4 hover:underline">
              (801) 901-8489
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
