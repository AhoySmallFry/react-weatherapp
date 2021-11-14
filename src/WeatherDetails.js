import React from "react";
import HiLo from "./008-weather.svg";
import Precipitation from "./049-umbrella.svg";
import Sunset from "./030-sunsets.svg";
import WindSpeed from "./051-wind sign.svg";
import "./WeatherDetails.css";
import FormattedSunset from "./FormattedSunset";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <div className="row d-flex justify-content-evenly">
        <div className="col-3 border-right">
          <div className="detail-name">High/Low</div>
          <img src={HiLo} alt="" className="forecast-image" />
          <div className="detail-value">
            <strong>{Math.round(props.data.maxTemp)}°</strong> /{" "}
            {Math.round(props.data.minTemp)}°
          </div>
        </div>
        <div className="col-3 border-right">
          <div className="detail-name">Precipitation</div>
          <img src={Precipitation} alt="" className="forecast-image" />
          <div className="detail-value">
            <strong>{props.data.rain}%</strong>
          </div>
        </div>
        <div className="col-3 border-right">
          <div className="detail-name">Wind Speed</div>
          <img src={WindSpeed} alt="" className="forecast-image" />
          <div className="detail-value">
            <strong>{Math.round(props.data.wind)} kph</strong>
          </div>
        </div>
        <div className="col-3">
          <div className="detail-name">Sunset</div>
          <img src={Sunset} alt="" className="forecast-image" />
          <div className="detail-value">
            <strong>
              <FormattedSunset date={props.data.sunset} />
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
