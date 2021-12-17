import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search";
import WeatherItem, { MainWeather } from "./components/WeatherItem";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class App extends Component {

  render() {
    return (
      <div className="app">
          <header>
          <Search />
          </header>
          <div className="main--container"> 
              <MainWeather />
              <div className="upcoming-weather">
                  < WeatherItem />
                  < WeatherItem />
                  <WeatherItem />
                  <WeatherItem />
                  <WeatherItem />
                  <WeatherItem />
                  <WeatherItem />
              </div>
      </div>
      </div>
    );
  }
}

export default App;
