import scenarios from "../data/scenarios.json";

const defaultAchievements = [
  "The internet immediately turned the timeline into a running joke.",
  "Fans started treating every normal update like official multiverse lore.",
  "The crossover became impossible to explain and even harder to ignore.",
];

const defaultMemeLines = [
  "Everyone: This cannot be real. The timeline: Watch me.",
  "Fans after five minutes: We need a full series now.",
  "Comment section: This is exactly why the multiverse needs supervision.",
];

const roleLabels = {
  auto_driver: "Auto Driver",
  doctor: "Doctor",
  food_delivery: "Food Delivery Guy",
  gym_trainer: "Gym Trainer",
  hr_manager: "HR Manager",
  news_anchor: "News Anchor",
  singer: "Singer",
  tech_support: "Tech Support",
  wedding_planner: "Wedding Planner",
};

export const normalizedScenarios = scenarios.flatMap((scenario) => {
  if (Array.isArray(scenario.roles)) {
    return scenario.roles.map((role) =>
      createScenarioFromRole(scenario.hero_name, role)
    );
  }

  return scenario;
});

function createScenarioFromRole(hero, role) {
  const roleName = roleLabels[role.category_key] ?? titleCase(role.category_key);

  return {
    id: `${slugify(hero)}-${slugify(roleName)}`,
    hero,
    role: roleName,
    question: `What if ${hero} was a ${roleName}?`,
    shortTitle: role.title,
    story: role.story,
    achievements: defaultAchievements,
    memeLines: defaultMemeLines,
    memeKeyword: `${hero} ${roleName} funny multiverse meme`,
    audioSuggestion: {
      title: "Multiverse Theme",
    },
    tags: ["generated", "funny"],
  };
}

function titleCase(value = "") {
  return value
    .split("_")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
