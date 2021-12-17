import React, { Component } from "react";
import { render } from "react-dom";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

export default class WeatherItem extends Component {
  render() {
    return (
      <div class="flex--border">
      <time>3:00</time>
      <img className="image-placeholder" src={partlycloudy} alt="Partly-cloudy Weather" placeholder="Partly-cloudy weather"/>
      <p>26 &deg;</p>
  </div>
      );
  }
}
export class MainWeather extends Component {
  render() {
    return (
      <div className="main-weather">
              <div className="main-temperature-image">
                      <img className="main__image-temp"src={clear} alt="Cloud-weather-image" placeholder="clear-clouds"/>
                      <p>Overcast Clouds</p>
              </div>
              <div className="main-temperature-information">
                  <p><span>Temperature </span>  <span class="span--delete"> 10&deg; to 11 &#8451;</span></p>
                  <div className="main-temperature-addition">
                    <p> <span>Humidity</span>  78% </p>
                    <p> <span class="indent">Pressure </span> 1008.48</p>  
              </div>
              </div>
              </div>
    );
  }
}
