import React, { useState } from "react";
import axios from "axios";
import Greeting from "./Greeting";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bc520cc14bbdedfd7e45158f2ef0439&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function submitForm(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    let iconUrl = response.data.weather[0].icon;
    let imgIcon = (
      <img
        src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`}
        alt="loading"
      />
    );

    setGreeting(
      <Greeting
        temperature={response.data.main.temp}
        description={response.data.weather[0].description}
        humidity={response.data.main.humidity}
        wind={response.data.wind.speed}
        icon={imgIcon}
      />
    );
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          autoFocus="on"
          className="search-bar"
          onChange={submitForm}
        />
        <input type="submit" value="Search" className="search-button" />
        <h2> {greeting} </h2>
      </form>
    </div>
  );
}
