import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [activeTab, setActiveTab] = useState("HTML");
  return (
    <div className="App">
      <h1>Tabs</h1>
      <div>
        {data.map((tab) => (
          <button
            className={activeTab === tab.label ? "active" : undefined}
            onClick={() => setActiveTab(tab.label)}
            key={tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-description">
        {data.map(
          (tabDesc) =>
            tabDesc.label === activeTab && <p>{tabDesc.description}</p>
        )}
      </div>
    </div>
  );
}

export default App;
