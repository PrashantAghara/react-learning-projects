import React, { useState } from "react";

import "./App.css";
import { fetchWeather } from "./api/fetchWeather";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState({});
  const onChangeHandler = (e) => {
    setCityName(e.target.value);
  };
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(cityName);
      setWeather(data);
      setCityName("");
    }
  };
  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Enter City"
        value={cityName}
        onChange={onChangeHandler}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>{"\u00b0"}C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
