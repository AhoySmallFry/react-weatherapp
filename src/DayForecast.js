import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="weather-forecast-temperature">
        <strong>{Math.round(props.data.temp.max)}°|</strong>
        {Math.round(props.data.temp.min)}°
      </div>
    </div>
  );
}
