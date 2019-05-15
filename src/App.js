import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "8d3175756da088dceec27c2e49462696"

class App extends React.Component {
  state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    
    if(city){
      const api_url = await   
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      
    this.setState({
      description: data.weather[0].description,
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      error: undefined
      });
    } else {
      this.setState({
        description: undefined,
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      humidity: undefined,
      error: "Введите название города"
      });
    }
  }
    render() {
      return(
          <div className="wrapper">
          <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
              <Info />
               </div>
              <div className="col-sm-7 form">
              <Form weatherMethod={this.gettingWeather}/>
              <Weather
              description={this.state.description} 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              error={this.state.error}
              />
             
            </div>
          </div>
            </div>
            </div>
          </div>
        );
      }
    }

export default App;