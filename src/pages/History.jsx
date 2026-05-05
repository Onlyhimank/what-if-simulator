import { Link } from "react-router-dom";
import { getScenarioHistory, saveCurrentScenario } from "../utils/storage";

export default function History() {
  const history = getScenarioHistory();

  return (
    <main className="min-h-screen bg-[#eef3ff] px-5 py-14 text-[#12131a] lg:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
              Your timeline
            </p>

            <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
              Scenario history.
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-bold leading-8 text-[#51566b]">
              Revisit the multiverse results you generated earlier and open any
              scenario again.
            </p>
          </div>

          <Link
            className="rounded-full bg-[#12131a] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-white"
            to="/generator"
          >
            New scenario
          </Link>
        </div>

        {history.length === 0 ? (
          <div className="rounded-[2rem] border border-[#12131a] bg-white p-10 text-center shadow-[12px_12px_0_#4b5bdc]">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
              Empty timeline
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.05em]">
              No scenarios yet.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#51566b]">
              Generate your first what-if scenario and it will appear here.
            </p>
            <Link
              className="mt-8 inline-flex rounded-full bg-[#12131a] px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
              to="/generator"
            >
              Generate now
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {history.map((scenario) => (
              <article
                className="rounded-[1.5rem] border border-[#12131a]/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#4b5bdc]/40 hover:shadow-[0_20px_50px_rgba(75,91,220,0.10)]"
                key={`${scenario.id}-${scenario.generatedAt}`}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#69708c]">
                  {scenario.hero} / {scenario.role}
                </p>
                <h2 className="mt-4 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                  {scenario.shortTitle}
                </h2>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#51566b]">
                  {scenario.story}
                </p>
                <Link
                  className="mt-6 inline-flex rounded-full border border-[#12131a]/15 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#12131a] transition hover:bg-[#12131a] hover:text-white"
                  onClick={() => saveCurrentScenario(scenario)}
                  to="/result"
                >
                  Open result
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
