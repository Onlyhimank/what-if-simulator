import "./About.css";

// List of main features of the application
// Stored as an array so we can dynamically render them in UI
const features = ["Scenario generator", "JSON-based content", "Funny results"];

//  List of technologies used in the project
// Also stored as an array for dynamic rendering
const techStack = [
  "React.js",
  "JavaScript",
  "React Router",
  "Tailwind CSS",
  "JSON",
  "localStorage",
];

export default function About() {
  return (
    <main
      className="about-container"
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef3ff",
        padding: "20px",
        color: "black",
      }}
    >
      <section className="card">
        <p className="about-subtitle">About the project</p>

        <h1
          className="about-title"
          style={{ fontSize: "32px", fontWeight: "bold" }}
        >
          A funny what-if simulator built with React.
        </h1>

        <p className="about-subtitle">
          What If Scenario Simulator is a project where users choose a famous
          person and a random role. The app then generates a funny alternate
          result using JSON data and JavaScript logic.
        </p>

        <div
          className="card-container"
          style={{ display: "flex", gap: "20px", marginTop: "20px" }}
        >
          <section
            className="card"
            style={{ border: "1px solid black", padding: "10px", flex: 1 }}
          >
            <h2 className="section-title">Problem We Solve</h2>
            <p className="about-subtitle">
              People enjoy memes but mostly consume them passively. Our app
              allows users to actively create their own funny scenarios.
            </p>
          </section>

          <section
            className="card"
            style={{ border: "1px solid black", padding: "10px", flex: 1 }}
          >
            <h2 className="section-title">How it works</h2>
            <p className="about-subtitle">
              User selects a person and a role. If a match exists in JSON data,
              it is shown. Otherwise, fallback logic generates a result.
            </p>
          </section>
        </div>

        <div className="list-container">
          <div>
            <h2 className="section-title">Main Features</h2>
            <ul className="list">
              {features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="section-title">Tech Stack</h2>
            <ul className="list">
              {techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>

        <section
          className="card"
          style={{
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
            padding: "15px",
          }}
        >
          <h2 className="section-title">Important :</h2>

          <p className="viva-box">
            This project does not use live AI, backend authentication, or a
            database. It uses predefined JSON data, React state, routing, and
            localStorage. This keeps the project simple and within syllabus.
          </p>
        </section>
      </section>
    </main>
  );
}
