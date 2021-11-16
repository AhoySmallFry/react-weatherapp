import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./FiveDayForecast.css";
import axios from "axios";
import DayForecast from "./DayForecast";

export default function FiveDayForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="FiveDayForecast">
        <div className="row">
          <div className="col-2">
            <DayForecast data={forecast[0]} />
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
  } else {
    let apiKey = "7cd341f73bed1fbf392c5c5cd61542e9";
    let long = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
