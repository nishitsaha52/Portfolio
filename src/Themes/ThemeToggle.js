import React, { useState } from "react";
import "../styles/ThemeToggler.css";

function ThemeToggler() {
  const [brightnessLevel, setBrightnessLevel] = useState(3);

  const handleSliderChange = (event) => {
    const newLevel = parseInt(event.target.value, 10);
    setBrightnessLevel(newLevel);

    // Update the CSS variable for the section background color
    document.documentElement.style.setProperty(
      "--section-background-color",
      `var(--section-bg-level-${newLevel})`
    );

    // Update the CSS variable for the body background gradient
    document.documentElement.style.setProperty(
      "--background-gradient",
      `var(--background-level-${newLevel})`
    );
  };

  return (
    <div className="theme-toggler">
      <input
        type="range"
        min="1"
        max="5"
        value={brightnessLevel}
        onChange={handleSliderChange}
        className="slider"
      />
      <p>Brightness Level: {brightnessLevel}</p>
    </div>
  );
}

export default ThemeToggler;
