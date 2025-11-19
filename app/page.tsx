const achievements = [
  {
    title: "Product Vision at Scale",
    description:
      "Directed a multi-quarter product roadmap that aligned design, engineering, and GTM teams, resulting in 42% year-over-year growth.",
  },
  {
    title: "Operational Excellence",
    description:
      "Built an experimentation framework that decreased iteration time from weeks to days and improved release confidence.",
  },
  {
    title: "Inclusive Leadership",
    description:
      "Mentored cross-functional teams of 25+ contributors and established rituals that kept stakeholders informed and inspired.",
  },
];

const experiences = [
  {
    role: "Head of Product",
    company: "Northwind Labs",
    period: "2021 — Present",
    highlights: [
      "Scaled a flagship B2B platform from pilot to enterprise adoption.",
      "Led discovery, positioning, and launch for three net-new offerings.",
    ],
  },
  {
    role: "Senior Product Manager",
    company: "Aurora Systems",
    period: "2018 — 2021",
    highlights: [
      "Managed the full lifecycle for consumer mobile experiences.",
      "Implemented data-informed prioritization that doubled engagement.",
    ],
  },
];

const skills = [
  "Product Strategy",
  "Roadmapping",
  "Go-To-Market",
  "Leadership",
  "Storytelling",
  "Data Fluency",
  "Operational Rigor",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:px-12 lg:px-16">
        <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-10 shadow-2xl shadow-black/40 md:grid-cols-[3fr,2fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3rem] text-zinc-400">
              Brandon Smith
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Building products that move companies and people forward.
            </h1>
            <p className="text-lg leading-relaxed text-zinc-300">
              I’m a product leader who loves connecting ambitious strategy with
              day-one execution. From zero-to-one launches to scaling up mature
              platforms, I help teams discover opportunities, ship with focus,
              and measure what matters.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:brandon.smithlf@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-white"
              >
                View experience
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2rem] text-zinc-400">
              Snapshot
            </p>
            <dl className="grid gap-6">
              <div>
                <dt className="text-sm text-zinc-400">Years of impact</dt>
                <dd className="text-3xl font-semibold text-white">10+</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-400">Teams led</dt>
                <dd className="text-3xl font-semibold text-white">25+</dd>
              </div>
              <div>
                <dt className="text-sm text-zinc-400">Markets launched</dt>
                <dd className="text-3xl font-semibold text-white">12</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="space-y-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {achievement.title}
              </h2>
              <p className="text-base text-zinc-300">{achievement.description}</p>
            </article>
          ))}
        </section>

        <section id="experience" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              Experience & leadership
            </h2>
            <span className="text-sm uppercase tracking-[0.2rem] text-zinc-400">
              Selected roles
            </span>
          </div>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.role}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
              >
                <header className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2rem] text-zinc-400">
                      {experience.company}
                    </p>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-400">{experience.period}</p>
                </header>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-400" />
                      <p>{highlight}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                How I create momentum
              </h2>
              <p className="text-zinc-300">
                I connect strategy with action, empower teams to experiment, and
                keep stakeholders inspired with narrative-driven updates.
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                Email:{" "}
                <a
                  href="mailto:brandon.smithlf@gmail.com"
                  className="text-white underline-offset-4 hover:underline"
                >
                  brandon.smithlf@gmail.com
                </a>{" "}
                · Phone:{" "}
                <a
                  href="tel:8019018489"
                  className="text-white underline-offset-4 hover:underline"
                >
                  (801) 901-8489
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900/80 via-zinc-900 to-zinc-950 p-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.2rem] text-emerald-300">
              Open to conversations
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Need a strategic product partner?
            </h2>
            <p className="mt-2 text-zinc-300">
              I love pairing bold roadmaps with grounded execution. Let’s talk
              about your next launch, transformation, or growth mandate.
            </p>
          </div>
          <a
            href="mailto:brandon.smithlf@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 font-semibold text-zinc-900 transition hover:bg-emerald-300"
          >
            Contact Brandon
          </a>
        </section>
      </main>
    </div>
  );
}
