import React, { Component } from "react";
import { render } from "react-dom";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";


export default class WeatherItem extends Component {
  get_WeatherIcons(idRange){
    if( idRange < 300 ){
       return "storm";
    } else if (idRange >= 300 && idRange <= 499){
      return "drizzle";
    } else if (idRange >= 500 && idRange <= 599){
      return "rain";
    } else if(idRange >= 600 && idRange <= 699){
     return "snow";  
    } else if (idRange >= 700 && idRange <= 799){
      return "fog";
    } else if (idRange === 800){
      return "clear";
    } else if (idRange === 801){
      return "partlycloudy";
    } else if (idRange > 801 && idRange <= 805){
      return "mostlycloudy";
    }
    }
  render() {
    return (
      <div className="body__main--content">
      <time>{this.props.time.split(" ")[1].substring(0,5)}</time>
      <img className="body__main--imgPlaceholder" src={require(`../img/weather-icons/${this.get_WeatherIcons(this.props.iconId)}.svg`)} alt="Partly-cloudy Weather" placeholder="Partly-cloudy weather"/>
      <p>{Math.round(this.props.dayDegree)}&deg;</p>
  </div>
      );
  }
}
export class MainWeather extends Component {
  get_WeatherIcons(idRange){
    if( idRange < 300 ){
       return "storm";
    } else if (idRange >= 300 && idRange <= 499){
      return "drizzle";
    } else if (idRange >= 500 && idRange <= 599){
      return "rain";
    } else if(idRange >= 600 && idRange <= 699){
     return "snow";  
    } else if (idRange >= 700 && idRange <= 799){
      return "fog";
    } else if (idRange === 800){
      return "clear";
    } else if (idRange === 801){
      return "partlycloudy";
    } else if (idRange > 801 && idRange <= 805){
      return "mostlycloudy";
    }
    }
  render() {
    return (
      <div className="body__main--weather">
              <div className="body__main--tempContent">
                      <img className="body__main--tempImg" src={require(`../img/weather-icons/${this.get_WeatherIcons(this.props.iconId)}.svg`)} alt="Cloud-weather-image" placeholder="clear-clouds"/>
                      <p>{this.props.currentWeather.weather[0].description}</p>
              </div>
              <div className="body__main--tempInfo">
                  <p><span>Temperature </span>  <span className="body__span--delete"> {Math.round(this.props.currentWeather.main.temp_min)}&deg; to {Math.round(this.props.currentWeather.main.temp_max)} &#8451;</span></p>
                  <div className="body__main--tempAddInfo">
                    <p> <span>Humidity</span>  {this.props.currentWeather.main.humidity}% </p>
                    <p> <span>Pressure </span> {this.props.currentWeather.main.pressure}</p>  
              </div>
              </div>
              </div>
    );
  }
}