import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">Hover over me</h2>
      </Tooltip>
      <hr />
      <Tooltip text="This is another tooltip">
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
