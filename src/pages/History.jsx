import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HISTORY_KEY = "whatIfHistory";

export default function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  if (history.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <h1 className="text-2xl">No scenarios yet 🚀</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl mb-6">Your History</h1>

      <div className="grid gap-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">
                {item.hero} as {item.role}
              </h2>
            </div>

            <button
              onClick={() => navigate("/result")}
              className="bg-blue-500 px-3 py-1 rounded"
            >
              Open Result
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
