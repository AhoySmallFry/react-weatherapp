import React from "react";
import "./App.css";

import Search from "./Search";
import UnitSelector from "./UnitSelector";

import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search defaultCity="Lincoln" />
      <hr />
      <FiveDayForecast />
      <hr />
      <Footer />
    </div>
  );
}
