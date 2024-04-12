import React, { useState } from "react";
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <div
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
};
export default Tooltip;
