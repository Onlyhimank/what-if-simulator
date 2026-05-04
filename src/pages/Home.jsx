import { Link } from "react-router-dom";
import scenarios from "../data/scenarios.json";

const heroScenario = scenarios[0];
const examples = scenarios.slice(4, 7);

const flow = [
  "Type a name",
  "Add a strange role",
  "Get the what-if card",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef3ff] text-[#12131a]">
      <section className="mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <div className="mb-8 h-1 w-16 rounded-full bg-[#ff6b6b]" />
          <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
            What if
            <span className="block text-[#4b5bdc]">the world</span>
            glitched?
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#51566b]">
            A clean React app that turns random people and roles into funny
            alternate-universe results with stories, records, memes, and music
            suggestions.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/generator"
              className="rounded-full bg-[#12131a] px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,91,220,0.22)]"
            >
              Make a scenario
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-[#12131a]/20 px-7 py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-[#12131a] transition hover:-translate-y-1 hover:bg-white"
            >
              See the idea
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-[#ffb86b] blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#7c5cff]/35 blur-2xl" />
          <article className="relative rotate-1 rounded-[2rem] border border-[#12131a] bg-white p-5 shadow-[12px_12px_0_#4b5bdc] transition hover:rotate-0">
            <div className="flex items-center justify-between border-b border-[#12131a]/10 pb-4">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#69708c]">
                Generated card
              </span>
              <span className="rounded-full bg-[#ff6b6b] px-3 py-1 text-xs font-black text-white">
                live data
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
              {heroScenario.question}
            </h2>
            <p className="mt-6 line-clamp-4 text-base leading-7 text-[#55524c]">
              {heroScenario.story}
            </p>

            <div className="mt-8 grid gap-3">
              <InfoRow label="Record" value={heroScenario.achievements[0]} />
              <InfoRow
                label="Sound"
                value={heroScenario.audioSuggestion.title}
              />
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-[#12131a]/10 bg-[#12131a] px-5 py-12 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {flow.map((item, index) => (
            <div className="flex items-center gap-5" key={item}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ffb86b] text-sm font-black text-[#12131a]">
                {index + 1}
              </span>
              <p className="text-xl font-black uppercase tracking-[-0.03em]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-6xl">
              Minimal UI.
              <span className="block text-[#4b5bdc]">Maximum nonsense.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#51566b]">
              The design stays simple: big typography, clean spacing, clear
              cards, and data coming from one JSON file.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {examples.map((scenario) => (
              <article
                className="rounded-[1.5rem] border border-[#12131a]/12 bg-white p-6 transition hover:-translate-y-1 hover:border-[#4b5bdc]/35 hover:shadow-[0_20px_50px_rgba(75,91,220,0.10)]"
                key={scenario.id}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#69708c]">
                  {scenario.hero} / {scenario.role}
                </p>
                <h3 className="mt-5 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                  {scenario.shortTitle}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#51566b]">
                  {scenario.story}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl bg-[#eef3ff] p-4">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#69708c]">
        {label}
      </p>
      <p className="mt-2 text-sm font-bold leading-6 text-[#12131a]">{value}</p>
    </div>
  );
}
