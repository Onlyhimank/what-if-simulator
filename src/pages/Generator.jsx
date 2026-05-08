import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { normalizedScenarios } from "../utils/scenarios";
import {
  addScenarioToHistory,
  increaseAttemptCount,
  saveCurrentScenario,
} from "../utils/storage";

const heroes = [...new Set(normalizedScenarios.map((scenario) => scenario.hero))]
  .filter(Boolean)
  .slice(0, 24);
const roles = [...new Set(normalizedScenarios.map((scenario) => scenario.role))]
  .filter(Boolean)
  .slice(0, 24);

export default function Generator() {
  const navigate = useNavigate();
  const [hero, setHero] = useState("MS Dhoni");
  const [role, setRole] = useState("Singer");
  const [error, setError] = useState("");

  function handleGenerate(event) {
    event.preventDefault();

    if (!hero.trim() || !role.trim()) {
      setError("Choose both blanks before generating the multiverse.");
      return;
    }

    const selectedScenario = findScenario(hero, role);
    const attempts = increaseAttemptCount();

    saveCurrentScenario(selectedScenario);
    addScenarioToHistory(selectedScenario);
    setError("");

    if (attempts > 5) {
      navigate("/login");
      return;
    }

    navigate("/result");
  }

  return (
    <main className="min-h-screen bg-[#eef3ff] px-5 py-14 text-[#12131a] lg:px-10">
      <section className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#4b5bdc]">
          Scenario generator
        </p>
        <h1 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
          Complete the what-if line.
        </h1>

        <form
          className="mt-10 rounded-[2rem] border border-[#12131a] bg-white p-6 shadow-[12px_12px_0_#4b5bdc] md:p-10"
          onSubmit={handleGenerate}
        >
          <div className="flex flex-wrap items-center gap-4 text-4xl font-black uppercase leading-tight tracking-[-0.05em] md:text-6xl">
            <span>What if</span>
            <ScenarioSelect
              label="person"
              onChange={setHero}
              options={heroes}
              value={hero}
            />
            <span>would be a</span>
            <ScenarioSelect
              label="role"
              onChange={setRole}
              options={roles}
              value={role}
            />
            <span>?</span>
          </div>

          {error && (
            <p className="mt-6 rounded-2xl bg-[#ff6b6b]/12 px-4 py-3 text-sm font-bold text-[#9f2020]">
              {error}
            </p>
          )}

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm font-bold leading-6 text-[#51566b]">
              Choose a person, choose a role, and open a playful alternate
              universe made for that exact combination.
            </p>
            <button className="rounded-full bg-[#12131a] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(75,91,220,0.22)]">
              Generate the multiverse
            </button>
          </div>
        </form>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
        <QuickPanel items={heroes.slice(0, 10)} onSelect={setHero} title="People" />
        <QuickPanel items={roles.slice(0, 10)} onSelect={setRole} title="Roles" />
      </section>
    </main>
  );
}

function ScenarioSelect({ label, onChange, options, value }) {
  return (
    <label className="min-w-[220px] flex-1">
      <span className="sr-only">{label}</span>
      <select
        className="w-full rounded-[1.4rem] border-2 border-[#12131a] bg-[#eef3ff] px-5 py-4 text-2xl font-black uppercase tracking-[-0.04em] outline-none transition hover:bg-white focus:bg-white md:text-4xl"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function QuickPanel({ items, onSelect, title }) {
  return (
    <div className="rounded-[1.5rem] border border-[#12131a]/10 bg-white p-5">
      <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#69708c]">
        Quick {title}
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            className="rounded-full border border-[#12131a]/10 px-4 py-2 text-sm font-bold text-[#51566b] transition hover:border-[#4b5bdc] hover:bg-[#eef3ff] hover:text-[#12131a]"
            key={item}
            onClick={() => onSelect(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

function findScenario(hero, role) {
  const normalizedHero = hero.trim().toLowerCase();
  const normalizedRole = role.trim().toLowerCase();

  const exactMatch = normalizedScenarios.find(
    (scenario) =>
      namesMatch(scenario.hero, normalizedHero) &&
      scenario.role.toLowerCase() === normalizedRole
  );

  if (exactMatch) {
    return createCustomScenario(exactMatch.hero, exactMatch.role);
  }

  return createCustomScenario(hero.trim(), role.trim());
}

function namesMatch(savedName, selectedName) {
  const normalizedSavedName = savedName.toLowerCase();
  return (
    normalizedSavedName === selectedName ||
    normalizedSavedName.includes(selectedName) ||
    selectedName.includes(normalizedSavedName)
  );
}

function createCustomScenario(hero, role) {
  const article = /^[aeiou]/i.test(role) ? "an" : "a";
  const persona = getPersonaFlavor(hero);
  const world = getRoleWorld(role);

  return {
    id: `${slugify(hero)}-${slugify(role)}-custom`,
    hero,
    role,
    question: `What if ${hero} was ${article} ${role}?`,
    shortTitle: `${hero} became ${world.title}`,
    story: `${persona.opening} In real life, people already know ${hero} for ${persona.realWorld}. In this timeline, that same identity gets redirected into ${article} ${role} career. ${world.story(hero, persona)} By evening, the internet is split between "this is genius" and "who approved this crossover?" which is usually how every iconic era begins.`,
    achievements: [
      world.achievements[0](hero, persona),
      world.achievements[1](hero, persona),
      world.achievements[2](hero, persona),
      `${persona.signature} became the unofficial brand line of the whole ${role.toLowerCase()} era`,
    ],
    memeLines: [
      world.memes[0](hero, persona),
      world.memes[1](hero, persona),
      `${hero} fans after 24 hours: "We were joking yesterday. Today we are emotionally invested."`,
    ],
    memeKeyword: `${hero} ${role} multiverse meme`,
    tags: ["custom", "multiverse", "funny"],
  };
}

function getPersonaFlavor(hero) {
  const normalizedHero = hero.toLowerCase();

  if (normalizedHero.includes("modi")) {
    return {
      opening:
        "The announcement starts like a national address, but the topic is somehow career change.",
      realWorld:
        "mass speeches, disciplined public image, election-stage confidence, and the kind of slogan timing people instantly recognise",
      signature: "Mitron energy",
      style: "disciplined, dramatic, and perfectly timed for prime-time discussion",
    };
  }

  if (normalizedHero.includes("dhoni")) {
    return {
      opening:
        "Nobody gets a press conference. One calm photo drops online and everyone understands something historic happened.",
      realWorld:
        "Captain Cool composure, last-over finishing, helicopter-shot nostalgia, and a fanbase that reads silence like strategy",
      signature: "Captain Cool silence",
      style: "minimal, calm, and impossible to read until the final moment",
    };
  }

  if (normalizedHero.includes("trump")) {
    return {
      opening:
        "The launch event has too many cameras, too many claims, and somehow even more confidence.",
      realWorld:
        "headline-making speeches, deal-maker branding, oversized confidence, and campaign-style showmanship",
      signature: "biggest-ever confidence",
      style: "loud, headline-friendly, and allergic to small entrances",
    };
  }

  if (normalizedHero.includes("elon")) {
    return {
      opening:
        "It begins with one late-night post, three impossible promises, and a logo nobody asked for.",
      realWorld:
        "startup chaos, rockets, electric cars, product launches, and the habit of turning one tweet into a business plan",
      signature: "prototype chaos",
      style: "techy, risky, and one update away from becoming a startup",
    };
  }

  if (normalizedHero.includes("virat")) {
    return {
      opening:
        "The energy is already at final-match intensity before the actual work even starts.",
      realWorld:
        "elite fitness, chase-master aggression, expressive celebrations, and the refusal to treat anything casually",
      signature: "full-aggression passion",
      style: "competitive, intense, and allergic to average performance",
    };
  }

  if (normalizedHero.includes("rohit")) {
    return {
      opening:
        "The vibe looks lazy for two minutes, then suddenly the whole room gets destroyed with timing.",
      realWorld:
        "effortless six-hitting, laid-back captaincy, comic timing, and the ability to look relaxed while changing the scoreboard",
      signature: "effortless hitman timing",
      style: "casual, smooth, and dangerous once momentum arrives",
    };
  }

  if (normalizedHero.includes("salman")) {
    return {
      opening:
        "Entry slow motion mein hoti hai, background mein public already seeti maar rahi hoti hai.",
      realWorld:
        "mass cinema entry, loyal fan culture, blockbuster dialogue energy, and the full Bhai aura",
      signature: "Bhai-level drama",
      style: "mass, emotional, and proudly larger than logic",
    };
  }

  if (normalizedHero.includes("carry")) {
    return {
      opening:
        "The first update sounds less like a launch and more like a roast with a business plan.",
      realWorld:
        "roast timing, internet slang, reaction energy, and the ability to turn anger into content",
      signature: "toh basically energy",
      style: "sarcastic, fast, and built for comment-section explosions",
    };
  }

  if (normalizedHero.includes("akshay")) {
    return {
      opening:
        "The day starts at 4 AM, because apparently even the multiverse follows his schedule.",
      realWorld:
        "disciplined routines, action-comedy timing, patriotic film energy, and absurdly early wake-up stories",
      signature: "4 AM discipline",
      style: "fast, fitness-heavy, and somehow already wrapped before lunch",
    };
  }

  if (normalizedHero.includes("kapil")) {
    return {
      opening:
        "The serious plan survives for exactly twelve seconds before someone in the room becomes the punchline.",
      realWorld:
        "stand-up timing, TV comedy hosting, crowd work, and making guests laugh before they answer properly",
      signature: "punchline-first logic",
      style: "comic, spontaneous, and always one joke away from chaos",
    };
  }

  if (normalizedHero.includes("amitabh")) {
    return {
      opening:
        "The room becomes formal the moment that baritone voice enters the timeline.",
      realWorld:
        "legendary screen presence, KBC gravitas, iconic dialogue delivery, and old-school superstar authority",
      signature: "baritone authority",
      style: "grand, dignified, and instantly dramatic",
    };
  }

  if (normalizedHero.includes("ashish")) {
    return {
      opening:
        "The situation starts normal, then suddenly every friend in the scene has a louder opinion.",
      realWorld:
        "YouTube sketch comedy, relatable friend-group chaos, and exaggerated everyday situations",
      signature: "friend-circle chaos",
      style: "loud, relatable, and built like a sketch that escalates too quickly",
    };
  }

  if (
    normalizedHero.includes("triggered") ||
    normalizedHero.includes("insaan")
  ) {
    return {
      opening:
        "The first reaction is calm for half a second, then the commentary mode fully activates.",
      realWorld:
        "reaction videos, sarcastic commentary, family-friendly internet humour, and expressive frustration",
      signature: "triggered-but-clean energy",
      style: "reactive, sarcastic, and perfect for meme screenshots",
    };
  }

  if (normalizedHero.includes("alakh")) {
    return {
      opening:
        "The board marker appears first, and somehow everyone already feels an exam coming.",
      realWorld:
        "Physics Wallah teaching style, motivational exam energy, whiteboard explanations, and student-fan loyalty",
      signature: "padhai revolution energy",
      style: "motivational, student-focused, and unexpectedly intense",
    };
  }

  if (normalizedHero.includes("sourav")) {
    return {
      opening:
        "The camera turns on, the day begins, and somehow even a normal plan feels like a family vlog episode.",
      realWorld:
        "daily vlogging, family-friendly moments, simple storytelling, and turning routine life into content",
      signature: "daily vlog comfort",
      style: "simple, warm, and casually content-ready",
    };
  }

  if (normalizedHero.includes("aamir")) {
    return {
      opening:
        "Nothing is announced until it has been researched, rehearsed, and emotionally overthought.",
      realWorld:
        "perfectionist film choices, transformation roles, social-message cinema, and careful storytelling",
      signature: "perfectionist mode",
      style: "detailed, sincere, and allergic to half-baked execution",
    };
  }

  if (normalizedHero.includes("yogi")) {
    return {
      opening:
        "The scene opens with saffron seriousness and a room that suddenly sits straighter.",
      realWorld:
        "saffron public image, strict administrative perception, religious symbolism, and no-nonsense speeches",
      signature: "strict-saffron energy",
      style: "direct, stern, and heavier than the situation expected",
    };
  }

  return {
    opening:
      "The news drops casually, but the internet immediately treats it like a cultural emergency.",
    realWorld:
      "their public image, fan expectations, recognisable habits, and the way people already talk about them online",
    signature: "main-character energy",
    style: "surprising, meme-ready, and strangely convincing",
  };
}

function getRoleWorld(role) {
  const normalizedRole = role.toLowerCase();

  if (normalizedRole.includes("singer")) {
    return {
      title: "the headline act",
      story: (hero, persona) =>
        `The debut concert is not over-produced; it is built around ${persona.style} stage presence. The first song becomes famous less because of perfect vocals and more because ${hero} makes the performance feel like a national event.`,
      achievements: [
        (hero) => `${hero}'s debut hook became the most quoted chorus of the week`,
        () => "Turned one live performance into a full-blown reel trend",
        () => "Made critics write serious reviews about a song everyone first watched as a meme",
      ],
      memes: [
        (hero) => `Audience: "Can they actually sing?" ${hero}: *drops one line* Audience: "Okay wait, why is this working?"`,
        (hero, persona) => `Music label: "We need promotion." ${hero}: "${persona.signature}." Promotion department: "Honestly, enough."`,
      ],
    };
  }

  if (
    normalizedRole.includes("cricket") ||
    normalizedRole.includes("commentator") ||
    normalizedRole.includes("coach")
  ) {
    return {
      title: "the stadium problem",
      story: (hero, persona) =>
        `The first match becomes less about runs and more about ${persona.style} match-day theatre. Every camera cut looks like it was designed for memes, and even the commentators stop pretending this is a normal sporting event.`,
      achievements: [
        (hero) => `${hero} turned one over into a full social-media festival`,
        () => "Made the scoreboard feel like a reality show finale",
        () => "Created a celebration style that every gully-cricket player copied the next morning",
      ],
      memes: [
        (hero) => `Bowler: "Plan kya hai?" ${hero}: "Content."`,
        (hero) => `Commentator: "${hero} has changed the game." Twitter: "No, the game has filed a complaint."`,
      ],
    };
  }

  if (
    normalizedRole.includes("teacher") ||
    normalizedRole.includes("coach") ||
    normalizedRole.includes("tutor") ||
    normalizedRole.includes("minister")
  ) {
    return {
      title: "the strictest class monitor",
      story: (hero, persona) =>
        `The classroom does not feel like school anymore; it feels like a TED Talk, a reality show, and a surprise inspection at the same time. ${hero} explains one topic with ${persona.style} delivery and suddenly even the backbenchers start taking notes.`,
      achievements: [
        () => "Made attendance rise without sending a single reminder",
        (hero) => `${hero}'s one-line homework warning became a campus meme`,
        () => "Turned the most boring chapter into a trending discussion",
      ],
      memes: [
        (hero) => `Student: "Sir, important hai kya?" ${hero}: "Beta, life important hai."`,
        () => `Backbenchers after class: "We came for attendance. We left with character development."`,
      ],
    };
  }

  if (
    normalizedRole.includes("chef") ||
    normalizedRole.includes("dhaba") ||
    normalizedRole.includes("restaurant")
  ) {
    return {
      title: "the kitchen headline",
      story: (hero, persona) =>
        `The kitchen runs like a live event. Nothing is casually cooked; every dish gets ${persona.style} treatment, every garnish has a backstory, and the menu reads like someone gave a meme page a Michelin budget.`,
      achievements: [
        () => "Made one signature dish sell out before lunch",
        (hero) => `${hero}'s kitchen rule became more famous than the recipe`,
        () => "Turned food reviews into fan theories",
      ],
      memes: [
        (hero) => `Customer: "Chef special kya hai?" ${hero}: "Aaj ka plot twist."`,
        () => `Food blogger: "Taste kaisa hai?" Waiter: "Sir, first understand the emotion."`,
      ],
    };
  }

  if (
    normalizedRole.includes("politician") ||
    normalizedRole.includes("judge") ||
    normalizedRole.includes("lawyer") ||
    normalizedRole.includes("government")
  ) {
    return {
      title: "the public debate machine",
      story: (hero, persona) =>
        `Every statement becomes a headline, every pause gets analysed, and every decision arrives with ${persona.style} confidence. The job technically changes, but the internet treats it like a weekly episode.`,
      achievements: [
        () => "Made one normal announcement trend for absolutely no normal reason",
        (hero) => `${hero}'s first policy-style line became a reaction template`,
        () => "Turned public feedback into a meme parliament",
      ],
      memes: [
        (hero) => `Reporter: "Simple answer please." ${hero}: "Simple answers are for simple timelines."`,
        () => `Public: "Is this serious?" Internet: "Too late, posters are already made."`,
      ],
    };
  }

  return {
    title: "the crossover event",
    story: (hero, persona) =>
      `The role sounds random at first, but ${hero} brings ${persona.style} energy to it and makes the whole thing feel strangely believable. It is not realistic in the boring sense; it is realistic in the internet sense, where one good moment can become a movement.`,
    achievements: [
      (hero) => `${hero} made the career switch look oddly official`,
      () => "Created a trend that started as a joke and ended as a fan demand",
      () => "Made people ask for episode two before episode one ended",
    ],
    memes: [
      (hero) => `Internet: "This makes no sense." ${hero}: "Exactly."`,
      () => `Everyone laughed for five minutes, then quietly admitted the concept had potential.`,
    ],
  };
}


function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
