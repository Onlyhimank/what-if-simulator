const CURRENT_SCENARIO_KEY = "whatIfCurrentScenario";
const HISTORY_KEY = "whatIfHistory";
const ATTEMPTS_KEY = "whatIfAttempts";

export function saveCurrentScenario(scenario) {
  localStorage.setItem(CURRENT_SCENARIO_KEY, JSON.stringify(scenario));
}

export function getCurrentScenario() {
  const savedScenario = localStorage.getItem(CURRENT_SCENARIO_KEY);

  if (!savedScenario) {
    return null;
  }

  return JSON.parse(savedScenario);
}

export function addScenarioToHistory(scenario) {
  const history = getScenarioHistory();
  const nextHistory = [
    {
      ...scenario,
      generatedAt: new Date().toISOString(),
    },
    ...history,
  ].slice(0, 12);

  localStorage.setItem(HISTORY_KEY, JSON.stringify(nextHistory));
}

export function getScenarioHistory() {
  const savedHistory = localStorage.getItem(HISTORY_KEY);

  if (!savedHistory) {
    return [];
  }

  return JSON.parse(savedHistory);
}

export function getAttemptCount() {
  return Number(localStorage.getItem(ATTEMPTS_KEY) || 0);
}

export function increaseAttemptCount() {
  const nextCount = getAttemptCount() + 1;
  localStorage.setItem(ATTEMPTS_KEY, String(nextCount));
  return nextCount;
}
