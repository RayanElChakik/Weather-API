import React, { Component } from "react";

import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class App extends Component {

  render() {
    return (
      <div className="app">
          <header>
          <div className="header--container">
              <input type="text" className="header--search" placeholder="Type in a city name"/>
              <button className="header--button"> Find Weather</button>
          </div>
          </header>
          <div className="main--container"> 
              <div className="main-weather">
              <div className="main-temperature-image">
                      <img className="main__image-temp"src={clear} alt="Cloud-weather-image" placeholder="clear-clouds"/>
                      <p>Overcast Clouds</p>
              </div>
              <div className="main-temperature-information">
                  <p><span>Temperature </span>  <span class="span--delete"> 10&deg; to 11 &#8451;</span></p>
                  <div className="main-temperature-addition">
                    <p> <span>Humidity</span>  78% <span class="indent">Pressure </span> 1008.48</p>  
              </div>
              </div>
              </div>
              <div className="grid__container">
                  <div className="grid--mobile grid--temp--one">
                      <time>3:00</time>
                      <img className="image-placeholder" src={partlycloudy} alt="Partly-cloudy Weather" placeholder="Partly-cloudy weather"/>
                      <p>26 &deg;</p>
                  </div>
                  <div className="grid--mobile grid--temp--two">
                  <time>6:00</time>
                    <img className="image-placeholder" src={partlycloudy} alt="Partly-cloudy Weather" placeholder="Partly-cloudy weather"/>
                    <p>26 &deg;</p>
                  </div>
                  <div className="grid--mobile grid--temp--three">
                  <time>9:00</time>
                    <img className="image-placeholder" src={clear} alt="Clear Weather" placeholder="Clear weather"/>
                    <p>28 &deg;</p>
                  </div>
                  <div className="grid--mobile grid--temp--four">
                  <time>12:00</time>
                    <img className="image-placeholder" src={clear} alt="Clear Weather" placeholder="Clear weather"/>
                    <p>28 &deg;</p>
                  </div>
                  <div className="grid--mobile grid--temp--five">
                  <time>15:00</time>
                    <img className="image-placeholder" src={clear} alt="Clear Weather" placeholder="Clear weather"/>
                    <p>28 &deg;</p>
                  </div>
                  <div className="grid--mobile grid--temp--six">
                  <time>18:00</time>
                    <img className="image-placeholder" src={clear} alt="Clear Weather" placeholder="Clear weather"/>
                    <p>28 &deg;</p>
                  </div>
                  <div className="grid--mobile grid--temp--seven">
                  <time>21:00</time>
                    <img className="image-placeholder" src={clear} alt="Clear Weather" placeholder="Clear weather"/>
                    <p>26 &deg;</p>
                  </div>
              </div>
      </div>
      </div>
    );
  }
}

export default App;
