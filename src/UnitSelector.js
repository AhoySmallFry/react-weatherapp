import React, { useState } from "react";
import "./UnitSelector.css";

const UnitSelector = (props) => {
  let [units, setUnits] = useState("celsius");

  const displayFahrenheit = (event) => {
    event.preventDefault();
    setUnits("fahrenheit");
  };

  const displayCelsius = (event) => {
    event.preventDefault();
    setUnits("celsius");
  };

  const convertToFahrenheit = () => {
    return Math.round((props.temperature * 9) / 5 + 32);
  };

  if (units === "celsius") {
    return (
      <div className="temperature">
        <span className="temperature-number">
          {Math.round(props.temperature)}º
        </span>
        <span className="units">
          <span id="celsius" className="active">
            C
          </span>
          |
          <a href="/" id="fahrenheit" onClick={displayFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span className="temperature-number">{convertToFahrenheit()}º</span>
        <span className="units">
          <a href="/" id="celsius" onClick={displayCelsius}>
            C
          </a>
          |
          <span id="fahrenheit" className="active">
            F
          </span>
        </span>
      </div>
    );
  }
};

export default UnitSelector;
