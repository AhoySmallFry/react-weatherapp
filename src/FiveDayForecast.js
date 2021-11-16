import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FiveDayForecast.css";
import axios from "axios";

export default function FiveDayForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "7cd341f73bed1fbf392c5c5cd61542e9";
  let long = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="FiveDayForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Mon</div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Tues</div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Weds</div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Thurs</div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Fri</div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Sat</div>
          <WeatherIcon code="01d" />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
      </div>
    </div>
  );
}
