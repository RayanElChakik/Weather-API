import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        <div className="header--container">
              <input type="text" className="header--search" placeholder="Type in a city name" id="input-name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}/>
              <button className="header--button" 
              onClick={event => {
            this.props.handleInput(this.state.input);
          }}> Find Weather</button>
          </div>
      </div>
    );
  }
}
export default Search;
