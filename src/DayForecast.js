import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  return (
    <div>
      <div className="forecast-day">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="weather-forecast-temperature">
        <strong>{Math.round(props.data.temp.max)}</strong>
        {Math.round(props.data.temp.min)}
      </div>
    </div>
  );
}
