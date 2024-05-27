import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip text="This is a tooltip">
        <p>Hover over me</p>
      </Tooltip>
      <hr />
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}

export default App;
