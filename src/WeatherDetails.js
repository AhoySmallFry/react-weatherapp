import React, { useState } from "react";
import axios from "axios";
import HiLo from "./008-weather.svg";
import Precipitation from "./049-umbrella.svg";
import Sunset from "./030-sunsets.svg";
import WindSpeed from "./051-wind sign.svg";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  const [weatherDetails, setWeatherDetails] = useState({ ready: true });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherDetails({
      ready: true,
      maxTemp: response.data.main.tempMax,
      minTemp: response.data.main.tempMin,
      wind: response.data.wind.speed,
      rain: response.data.main.humidity,
      sunset: response.data.sys.sunset,
    });
  }

  if (weatherDetails.ready) {
    return (
      <div className="WeatherDetails">
        <div className="row d-flex justify-content-evenly">
          <div className="col-3 border-right">
            <div className="detail-name">High/Low</div>
            <img src={HiLo} alt="" className="forecast-image" />
            <div className="detail-value">
              <strong>{weatherDetails.maxTemp}°</strong> /{" "}
              {weatherDetails.minTemp}°
            </div>
          </div>
          <div className="col-3 border-right">
            <div className="detail-name">Precipitation</div>
            <img src={Precipitation} alt="" className="forecast-image" />
            <div className="detail-value">
              <strong>{weatherDetails.rain}%</strong>
            </div>
          </div>
          <div className="col-3 border-right">
            <div className="detail-name">Wind Speed</div>
            <img src={WindSpeed} alt="" className="forecast-image" />
            <div className="detail-value">
              <strong>{weatherDetails.wind} kph</strong>
            </div>
          </div>
          <div className="col-3">
            <div className="detail-name">Sunset</div>
            <img src={Sunset} alt="" className="forecast-image" />
            <div className="detail-value">
              <strong>{weatherDetails.sunset}</strong>
            </div>
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
