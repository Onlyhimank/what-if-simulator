import { Link } from "react-router-dom";
import { getCurrentScenario } from "../utils/storage";

export default function Result() {
  const scenario = getCurrentScenario();

  if (!scenario) {
    return (
      <main className="min-h-screen bg-[#eef3ff] px-5 py-20 text-center text-[#12131a]">
        <h1 className="text-5xl font-black uppercase tracking-[-0.06em]">
          No multiverse yet.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[#51566b]">
          Generate a scenario first, then the app will show your alternate
          universe result here.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full bg-[#12131a] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
          to="/generator"
        >
          Go to generator
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eef3ff] px-5 py-14 text-[#12131a] lg:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
              Multiverse output
            </p>
            <h1 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              {scenario.shortTitle}
            </h1>
          </div>
          <Link
            className="rounded-full border border-[#12131a]/15 bg-white px-6 py-3 text-center text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#12131a] hover:text-white"
            to="/generator"
          >
            Generate again
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
          <article className="rounded-[2rem] border border-[#12131a] bg-white p-6 shadow-[12px_12px_0_#4b5bdc] md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#69708c]">
              {scenario.question}
            </p>
            <p className="mt-7 text-xl font-bold leading-9 text-[#51566b]">
              {scenario.story}
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {scenario.achievements.map((achievement, index) => (
                <SceneCard
                  key={achievement}
                  label={`Milestone ${index + 1}`}
                  text={achievement}
                />
              ))}
            </div>
          </article>

          <aside>
            <section className="rounded-[2rem] bg-[#12131a] p-6 text-white md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ffb86b]">
                Meme moments
              </p>
              <div className="mt-6 space-y-4">
                {scenario.memeLines?.slice(0, 3).map((line, index) => (
                  <div
                    className="rounded-[1.4rem] bg-white/10 p-4"
                    key={line}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                      Meme cut {index + 1}
                    </p>
                    <p className="mt-3 text-sm font-bold leading-6 text-white">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

function SceneCard({ label, text }) {
  return (
    <section className="rounded-[1.5rem] bg-[#eef3ff] p-5">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#69708c]">
        {label}
      </p>
      <p className="mt-3 text-sm font-black leading-6 text-[#12131a]">{text}</p>
    </section>
  );
}
