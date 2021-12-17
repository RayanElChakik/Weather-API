import React, { Component } from "react";
import { render } from "react-dom";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

export default class WeatherItem extends Component {
  render() {
    return (
      <div className="flex--border">
      <time>{this.props.time.split(" ")[1].substring(0,5)}</time>
      <img className="image-placeholder" src={partlycloudy} alt="Partly-cloudy Weather" placeholder="Partly-cloudy weather"/>
      <p>{Math.round(this.props.dayDegree-273.15)}&deg;</p>
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
                      <p>{this.props.discriptions}</p>
              </div>
              <div className="main-temperature-information">
                  <p><span>Temperature </span>  <span className="span--delete"> {Math.round(this.props.tempMin-273.15)}&deg; to {Math.round(this.props.tempMax-273.15)} &#8451;</span></p>
                  <div className="main-temperature-addition">
                    <p> <span>Humidity</span>  {this.props.humidity}% </p>
                    <p> <span className="indent">Pressure </span> {this.props.pressure}</p>  
              </div>
              </div>
              </div>
    );
  }
}
