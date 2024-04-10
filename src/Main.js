import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Components/Weather';

function Main() {
    const [userDetails, setUserDetails] = useState({});
    const [weather, setWeatherDetails] = useState({});
    const [city, setCity] = useState('Bakhtiyarpur');

    const fetchUserDetails = async () => {
        const { data } = await axios.get("https://randomuser.me/api/");
        const details = data.results[0];
        setUserDetails(details);
    };

    const fetchWeatherDetails = async (city) => { 
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=143918ec0f41d7ad587cd37960fa48b1`);
        setWeatherDetails(data);
    };

    useEffect(() => {
        fetchUserDetails();
        fetchWeatherDetails(city);
    }, [city]);

  
    const handleCityChange = (newCity) => {
        setCity(newCity);
        fetchWeatherDetails(newCity);
        console.log(city);
    };

    return (
        <div>
            <Weather weather={weather} onCityChange={handleCityChange} />
        </div>
    );
}

export default Main;
