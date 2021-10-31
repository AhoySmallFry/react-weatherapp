import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  return (
    <div className="Search">
      <form className="input-group mb-3" id="change-city-form">
        <input
          type="text"
          className="form-control"
          placeholder="Change city here..."
          autoComplete="off"
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
    </div>
  );
}
