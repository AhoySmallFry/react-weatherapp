import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7cd341f73bed1fbf392c5c5cd61542e9&units=metric`;
  axios.get(url).then(displayTemperature);

  if (temperature) {
    return (
      <h1>
        The temperature in {props.city} is currently {Math.round(temperature)}°C
      </h1>
    );
  } else {
    return <p>Loading temperature for {props.city}...</p>;
  }
}
