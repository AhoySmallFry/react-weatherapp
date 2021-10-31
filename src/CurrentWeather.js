import React from "react";
import "./CurrentWeather.css";

export default function CurrentCityWeather() {
  let currentWeatherData = {
    city: "Nottingham",
    date: "17 October",
    day: "Sunday",
    time: "14:30",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 21,
    humidity: 5,
    wind: 11,
    maximum: 25,
  };

  return (
    <div className="CurrentCityWeather">
      <div className="row">
        <div className="col-12">
          <h1 className="current-city">{currentWeatherData.city}</h1>
          <h2>
            <span className="current-time">
              {currentWeatherData.day} {currentWeatherData.time}
            </span>
          </h2>
          <h2>
            <span className="current-date">{currentWeatherData.date}</span>
          </h2>
          <p className="current-weather">
            <img
              src={currentWeatherData.imgUrl}
              alt={currentWeatherData.description}
            />
            <p className="current-temp">
              <span> {currentWeatherData.temperature}</span>°
              <span className="current-temp-unit">C</span>
            </p>
          </p>
          <p className="current-description">
            {currentWeatherData.description}
          </p>
        </div>
      </div>
    </div>
  );
}
