const features = [
  "Scenario generator with person and role selection",
  "Curated scenario content",
  "Multiverse result page with story and meme moments",
  "History page for generated scenarios",
  "Login gate for continued usage",
  "Responsive React interface",
];

const techStack = [
  "React.js",
  "JavaScript",
  "React Router",
  "Tailwind CSS",
  "JSON",
  "Browser storage",
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#eef3ff] px-5 py-14 text-[#12131a] lg:px-10">
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
          About the project
        </p>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          A funny what-if simulator built with React.
        </h1>

        <p className="mt-7 max-w-3xl text-lg font-bold leading-8 text-[#51566b]">
          What If Scenario Simulator lets users choose a famous person and an
          unexpected role. The app then turns that combination into a playful
          alternate-universe result using scenario content and JavaScript logic.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <InfoCard title="Problem we solve">
            People enjoy meme-style alternate-reality content, but they usually
            consume it passively. This app makes the experience interactive by
            letting users create their own combinations.
          </InfoCard>

          <InfoCard title="How it works">
            The user selects a person and a role. The app prepares a result from
            curated scenario content and simple JavaScript matching so every
            combination feels connected to the selected hero and role.
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ListCard items={features} title="Main features" />
          <ListCard items={techStack} title="Tech stack" />
        </div>

        <section className="mt-6 rounded-[2rem] bg-[#12131a] p-6 text-white md:p-8">
          <h2 className="text-3xl font-black uppercase tracking-[-0.05em]">
            Project scope
          </h2>
          <p className="mt-5 max-w-4xl leading-8 text-white/75">
            The project is intentionally built with React, JSON data, routing,
            forms, conditional rendering, arrays, and browser storage. This keeps
            the implementation understandable and aligned with the course scope.
          </p>
        </section>
      </section>
    </main>
  );
}

function InfoCard({ children, title }) {
  return (
    <section className="rounded-[2rem] border border-[#12131a] bg-white p-6 shadow-[10px_10px_0_#4b5bdc] md:p-8">
      <h2 className="text-3xl font-black uppercase tracking-[-0.05em]">
        {title}
      </h2>
      <p className="mt-5 leading-8 text-[#51566b]">{children}</p>
    </section>
  );
}

function ListCard({ items, title }) {
  return (
    <section className="rounded-[2rem] border border-[#12131a]/10 bg-white p-6 md:p-8">
      <h2 className="text-3xl font-black uppercase tracking-[-0.05em]">
        {title}
      </h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 font-bold text-[#51566b]" key={item}>
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff6b6b]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
