import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherItem, { MainWeather } from "./components/WeatherItem";

// import fakeWeather from "./fakeWeatherData.json";
// import clear from "./img/weather-icons/clear.svg";
// import partlycloudy from "./img/weather-icons/partlycloudy.svg";


const API_Key = "bd89960110bd1c361fcd7effa2b2904e"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherList: undefined,
      country: "",
      error: null,
    };
  }
  
  getWeatherList= (country) =>{
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${country}&cnt=8&units=metric&appid=${API_Key}`)
    .then(res=>{
      if(!res.ok){
        this.setState({error:'Could not find Country please try again!'});
      } else{
        return res.json()
      }})
    .then(data=>this.setState({weatherList:data.list,error:null}))
    .catch(err=>{
      this.setState({error:'Could not find such Country. Please try again!'});
    })
  }

  handleInputChange = value => {
    this.setState({ country: value });
    this.getWeatherList(value)
  };

  render() {
    if(this.state.country !=="" && this.state.weatherList !== undefined && this.state.error === null){
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
                // iconId = {this.state.weatherList[0].weather[0].id}
                />
                <div className="body__main--flex">
                  {this.state.weatherList.map((item,index)=>{
                    if(index > 0 && index <8){
                      return < WeatherItem key={index} 
                      time={item.dt_txt} 
                      dayDegree={item.main.temp} 
                      iconId={item.weather[0].id}
                      alt={item.weather[0].description} 
                      />
                    }
                    else{
                      return "";
                    }
                  })}
                </div>
        </div>
        </div>
      );
    }
    else if (this.state.error) {
      return ( <div className="app">
         <header>
            <Search handleInput={this.handleInputChange}/>
            </header>
            <div>
            <h1 className="body__main--errorDisplay"><i className='fas fa-exclamation-triangle'></i>{this.state.error}<i className='fas fa-exclamation-triangle'></i></h1>
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
