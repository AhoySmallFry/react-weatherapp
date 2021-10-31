import React from "react";
import "./UnitSelector.css";

export default function UnitSelector() {
  return (
    <div className="UnitSelector">
      <div className="row d-flex flex-row-reverse bd-highlight">
        <div class="units">
          <a href="#" id="celsius">
            °C
          </a>
          |
          <a href="#" id="farenheit">
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
