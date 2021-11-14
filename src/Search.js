import React, { useState } from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import WeatherDetails from "./WeatherDetails";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      city: response.data.name,
      time: new Date(response.data.dt * 1000),
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      rain: response.data.main.humidity,
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "7cd341f73bed1fbf392c5c5cd61542e9";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form
          className="input-group mb-3"
          id="change-city-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Change city here..."
            autoComplete="off"
            onChange={handleCityChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary change-city-button button-icon"
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary current-location-button button-icon"
              type="button"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </button>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
