import React from "react";
import "./FiveDayForecast.css";

export default function FiveDayForecast() {
  return (
    <div className="FiveDayForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Mon</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            classNameName="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Tues</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            classNameName="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Weds</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            classNameName="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Thurs</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            classNameName="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Fri</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            classNameName="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
        <div className="col-2">
          <div className="forecast-day">Sat</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
            classNameName="forecast-image"
          />
          <div className="weather-forecast-temperature">
            <strong>25°</strong> 18°
          </div>
        </div>
      </div>
    </div>
  );
}
