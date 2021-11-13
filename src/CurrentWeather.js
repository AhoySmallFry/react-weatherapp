import React, { useState } from "react";
import FormattedTime from "./FormattedTime";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentCityWeather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      time: new Date(response.data.dt * 1000),
    });
  }

  let currentWeatherData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };

  if (weatherData.ready) {
    return (
      <div className="CurrentCityWeather">
        <div className="row">
          <div className="col-12">
            <h1 className="current-city">{weatherData.city}</h1>
            <h2>
              <span className="current-time">
                <FormattedTime date={weatherData.time} />
              </span>
            </h2>
            <h2>
              <span className="current-date">
                <FormattedDate date={weatherData.time} />
              </span>
            </h2>
            <p className="current-weather">
              <img
                src={currentWeatherData.imgUrl}
                alt={weatherData.description}
              />
              <p className="current-temp">
                <span> {Math.round(weatherData.temperature)}</span>°
                <span className="current-temp-unit">C</span>
              </p>
            </p>
            <p className="current-description">{weatherData.description}</p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7cd341f73bed1fbf392c5c5cd61542e9";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
