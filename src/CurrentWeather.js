import React from "react";
import FormattedTime from "./FormattedTime";
import FormattedDate from "./FormattedDate";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentCityWeather">
      <div className="row">
        <div className="col-12">
          <h1 className="current-city">{props.data.city}</h1>
          <h2>
            <span className="current-time">
              <FormattedTime date={props.data.time} />
            </span>
          </h2>
          <h2>
            <span className="current-date">
              <FormattedDate date={props.data.time} />
            </span>
          </h2>
          <p className="current-weather">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <p className="current-temp">
              <span> {Math.round(props.data.temperature)}</span>°
              <span className="current-temp-unit">C</span>
            </p>
          </p>
          <p className="current-description">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
