import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentCityWeather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

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

  if (ready) {
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
                <span> {temperature}</span>°
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
  } else {
    let apiKey = "7cd341f73bed1fbf392c5c5cd61542e9";
    let city = "Birmingham";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
