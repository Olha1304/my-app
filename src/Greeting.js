import React from "react";
import axios from "axios";

export default function Greeting(props) {
  return (
    <div>
      <ul>
        <li>Temperature: {Math.round(props.temperature)} °C</li>
        <li>Description: {props.description} </li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind Speed: {Math.round(props.wind)} km/h</li>
        <li>{props.icon}</li>
      </ul>
    </div>
  );
}
