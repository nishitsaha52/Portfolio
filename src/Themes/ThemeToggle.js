import React, { useState, useEffect } from "react";
import "../styles/ThemeToggler.css";

function ThemeToggler() {
  const [brightnessLevel, setBrightnessLevel] = useState(3); // Default brightness level

  useEffect(() => {
    // Apply the default brightness level on load
    document.documentElement.style.setProperty(
      "--section-background-color",
      `var(--section-bg-level-${brightnessLevel})`
    );
    document.documentElement.style.setProperty(
      "--background-gradient",
      `var(--background-level-${brightnessLevel})`
    );
  }, [brightnessLevel]);

  const handleSliderChange = (event) => {
    const newLevel = parseInt(event.target.value, 10);
    setBrightnessLevel(newLevel);

    // Update CSS variables for the section background color and gradient
    document.documentElement.style.setProperty(
      "--section-background-color",
      `var(--section-bg-level-${newLevel})`
    );
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
        aria-label="Adjust brightness level"
      />
      <p>Brightness Level: {brightnessLevel}</p>
    </div>
  );
}

export default ThemeToggler;
