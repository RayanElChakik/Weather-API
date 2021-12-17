import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search";
import WeatherItem, { MainWeather } from "./components/WeatherItem";
import fakeWeather from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherList: fakeWeather.list,
    };
  }
  
  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
          <header>
          <Search />
          </header>
          <div className="main--container"> 
              <MainWeather humidity={this.state.weatherList[0].main.humidity} pressure={this.state.weatherList[0].main.pressure} tempMin={this.state.weatherList[0].main.temp_min} tempMax={this.state.weatherList[0].main.temp_max}
              discriptions={this.state.weatherList[0].weather[0].description}/>
              <div className="upcoming-weather">
                {this.state.weatherList.map((item,index) =>{
                  if(index > 0 && index <8){
                    return  < WeatherItem time={item.dt_txt} dayDegree={item.main.temp} />
                  }
                })}
              </div>
      </div>
      </div>
    );
  }
}

export default App;
