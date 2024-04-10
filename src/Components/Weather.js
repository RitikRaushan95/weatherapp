import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Weather({ weather, onCityChange }) {
  const celcius= Math.floor((weather.main?.temp) - 273.15);
  const [city, setCity] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    let newCity = document.querySelector(".form-control").value;
    if(newCity === '') {
      newCity = 'Bakhtiyarpur';
    }
    setCity(newCity);
    onCityChange(newCity);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card" style={{ width: "18rem", backgroundImage: `url("https://miro.medium.com/v2/resize:fit:640/format:webp/1*-qbcY8nyuE2XdusikcmkEw.gif")`}}>
        <div className="card-body">
          <h5>Weather</h5>
          <form className="form-inline" onSubmit={handleSearch}>
            <div className="form-group" style={{ display: "flex", flexDirection: "row" }}>
              <input className="form-control mr-2" type="search" placeholder="Search for city" aria-label="Search" style={{ width: "11rem" }} />
              <button className="btn btn-outline-success" type="submit" style={{ marginLeft: "10px", backgroundColor: "#e3f2fd", color: "black" }}>Search</button>
            </div>
          </form>
          <div style={{ marginTop: "15px" }}>
            <h5>{weather.name}</h5>
            <p>Now</p>
            <h2 style={{ fontSize: "35px" }}>{celcius}<sup>o</sup>C</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <p>Wind Speed: {weather.wind?.speed}km/h</p>
            <p>Humidity: {weather.main?.humidity}g.m<sup>-3</sup></p>
            <p>Pressure: {weather.main?.pressure}Pa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
