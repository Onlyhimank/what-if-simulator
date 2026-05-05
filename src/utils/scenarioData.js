import rawScenarios from "../data/scenarios.json";

export const scenarios = normalizeScenarioData(rawScenarios);

function normalizeScenarioData(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  if (data[0]?.hero_name && Array.isArray(data[0]?.roles)) {
    return data.flatMap((heroGroup) =>
      heroGroup.roles.map((roleItem) => {
        const role = toTitleCase(roleItem.category_key || roleItem.title);

        return {
          id: `${heroGroup.hero_id}-${roleItem.category_key}`,
          hero: heroGroup.hero_name,
          role,
          question: `What if ${heroGroup.hero_name} was a ${role}?`,
          shortTitle: roleItem.title,
          story: roleItem.story,
          achievements: [
            `${heroGroup.hero_name} made ${role.toLowerCase()} feel like a headline moment`,
            `Fans started calling it the ${role.toLowerCase()} era`,
            `The internet turned the whole crossover into a trend`,
          ],
          memeLines: [
            `${heroGroup.hero_name} entered ${role} mode and the timeline immediately became unstable.`,
            `Comment section: "This should not work, but somehow it does."`,
            `Fans after one day: "We need a full series now."`,
          ],
          memeKeyword: `${heroGroup.hero_name} ${role} meme`,
          audioSuggestion: {
            title: "Multiverse Reveal Theme",
            reason: "A simple background cue for the alternate-universe reveal.",
          },
          tags: ["scenario", "multiverse", "funny"],
        };
      })
    );
  }

  return data;
}

function toTitleCase(value = "") {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
