import React from "react";
import "./App.css";

import Search from "./Search";
import UnitSelector from "./UnitSelector";
import CurrentCityWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Search />
      <UnitSelector />
      <CurrentCityWeather defaultCity="Lincoln" />
      <hr />
      <WeatherDetails defaultCity="Lincoln" />
      <hr />
      <FiveDayForecast />
      <hr />
      <Footer />
    </div>
  );
}
