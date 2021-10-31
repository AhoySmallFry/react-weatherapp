import React from "react";
import "./UnitSelector.css";

export default function UnitSelector() {
  return (
    <div className="UnitSelector">
      <div className="row d-flex flex-row-reverse bd-highlight">
        <div class="units">
          <button id="celsius">°C</button>|<button id="farenheit">°F</button>
        </div>
      </div>
    </div>
  );
}
