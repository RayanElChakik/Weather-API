import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search";
import WeatherItem, { MainWeather } from "./components/WeatherItem";
import fakeWeather from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

const API_Key = "bd89960110bd1c361fcd7effa2b2904e"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherList: undefined,
      country: ""
    };
  }
  getWeatherList= (country =>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&units=metric&appid=${API_Key}`)
    .then(res=> res.json())
    .then(data=>this.setState({weatherList:data.list}))
  })
  handleInputChange = value => {
    this.setState({ country: value });
    this.getWeatherList(value)
  };
  render() {
    if(this.state.country !="" && this.state.weatherList !== undefined){
      return (
        <div className="app">
            <header>
            <Search handleInput={this.handleInputChange}/>
            </header>
            <div className="main--container"> 
                <MainWeather 
                currentWeather = {this.state.weatherList[0]}
                // humidity={this.state.weatherList[0].main.humidity} 
                // pressure={this.state.weatherList[0].main.pressure} 
                // tempMin={this.state.weatherList[0].main.temp_min} 
                // tempMax={this.state.weatherList[0].main.temp_max}
                // discriptions={this.state.weatherList[0].weather[0].description}
                iconId = {this.state.weatherList[0].weather[0].id}/>
                <div className="body__main--flex">
                  {this.state.weatherList.map((item,index) =>{
                    if(index > 0 && index <8){
                      return  < WeatherItem time={item.dt_txt} dayDegree={item.main.temp} 
                      iconId={item.weather[0].id}/>
                    }
                  })}
                </div>
        </div>
        </div>
      );
    }
    else {
      return (
        <div className="app">
            <header>
            <Search handleInput={this.handleInputChange}/>
            </header>
       </div>
      );
    }
  }
}

export default App;
