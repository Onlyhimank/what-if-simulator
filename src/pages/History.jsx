import { Link } from "react-router-dom";
import { getScenarioHistory, saveCurrentScenario } from "../utils/storage";
import "./History.css";

export default function History({ darkMode }) {
  const history = getScenarioHistory();

  return (
    <main className={`history-page ${darkMode ? "history-dark" : "history-light"}`}>
      <section className="history-container">
        <div className="history-header">
          <div>
            <p className="history-subtitle">Saved locally</p>

            <h1 className="history-title">
              Scenario history.
            </h1>
          </div>

          <Link className="history-btn" to="/generator">
            New scenario
          </Link>
        </div>

        {history.length === 0 ? (
          <div className={`empty-box ${darkMode ? "card-dark" : "card-light"}`}>
            <h2 className="empty-title">
              No saved scenarios yet.
            </h2>

            <p className={`empty-text ${darkMode ? "text-dark" : "text-light"}`}>
              Generated results are stored in localStorage and will appear here.
            </p>
          </div>
        ) : (
          <div className="history-grid">
            {history.map((scenario) => (
              <article
                className={`history-card ${
                  darkMode ? "card-dark" : "card-light"
                }`}
                key={`${scenario.id}-${scenario.generatedAt}`}
              >
                <p className={`card-label ${darkMode ? "text-dark" : "text-light"}`}>
                  {scenario.hero} / {scenario.role}
                </p>

                <h2 className="card-title">
                  {scenario.shortTitle}
                </h2>

                <p className={`card-story ${darkMode ? "text-dark" : "text-light"}`}>
                  {scenario.story}
                </p>

                <Link
                  className="open-link"
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