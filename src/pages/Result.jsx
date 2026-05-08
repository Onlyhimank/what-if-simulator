import { Link } from "react-router-dom";
import { getCurrentScenario } from "../utils/storage";
import "./Result.css";

export default function Result({ darkMode }) {
  const scenario = getCurrentScenario();

  if (!scenario) {
    return (
      <main
        className={`empty-page ${darkMode ? "result-dark" : "result-light"}`}
      >
        <h1 className="empty-title">No multiverse yet.</h1>

        <p className={`empty-text ${darkMode ? "empty-dark" : "empty-light"}`}>
          Generate a scenario first, then the app will show your alternate
          universe result here.
        </p>

        <Link className="empty-btn" to="/generator">
          Go to generator
        </Link>
      </main>
    );
  }

  return (
    <main
      className={`result-page ${darkMode ? "result-dark" : "result-light"}`}
    >
      <section className="result-container">
        <div className="result-header">
          <div>
            <p className="result-subtitle">Multiverse output</p>

            <h1 className="result-title">{scenario.shortTitle}</h1>
          </div>

          <Link
            className={`generate-btn ${darkMode ? "btn-dark" : "btn-light"}`}
            to="/generator"
          >
            Generate again
          </Link>
        </div>

        <div className="result-grid">
          <article
            className={`main-card ${darkMode ? "result-card-dark" : "result-card-light"
}`}
          >
            <p
              className={`question ${
                darkMode ? "question-dark" : "question-light"
              }`}
            >
              {scenario.question}
            </p>

            <p className={`story ${darkMode ? "story-dark" : "story-light"}`}>
              {scenario.story}
            </p>

            <div className="achievement-grid">
              {scenario.achievements.map((achievement, index) => (
                <SceneCard
                  darkMode={darkMode}
                  key={achievement}
                  label={`Milestone ${index + 1}`}
                  text={achievement}
                />
              ))}
            </div>
          </article>

          <aside>
            <section
              className={`meme-box ${darkMode ? "meme-dark" : "meme-light"}`}
            >
              <p className="meme-title">Meme moments</p>

              <div className="meme-list">
                {scenario.memeLines?.slice(0, 3).map((line, index) => (
                  <div className="meme-item" key={line}>
                    <p className="meme-label">Meme cut {index + 1}</p>

                    <p className="meme-text">{line}</p>
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

function SceneCard({ label, text, darkMode }) {
  return (
    <section
      className={`scene-card ${darkMode ? "scene-dark" : "scene-light"}`}
    >
      <p
        className={`scene-label ${
          darkMode ? "scene-label-dark" : "scene-label-light"
        }`}
      >
        {label}
      </p>

      <p
        className={`scene-text ${
          darkMode ? "scene-text-dark" : "scene-text-light"
        }`}
      >
        {text}
      </p>
    </section>
  );
}
