import React from "react";

export default function FormattedSunset(props) {
  let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hour}:{minutes}
    </div>
  );
}
