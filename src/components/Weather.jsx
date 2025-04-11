import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_weather from '../assets/clear.png'
import cloud_weather from '../assets/cloud.png'
import drizzle_weather from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain_weather from '../assets/rain.png'
import snow_weather from '../assets/snow.png'
import wind from '../assets/wind.png'

function Weather() {
    const [weatherData, setWeatherData] = useState(false)
    const [search, setSearch] = useState('')
    const icons = {
        "01d": clear_weather,
        "01n": clear_weather,
        "02d": cloud_weather,
        "02n": cloud_weather,
        "03d": cloud_weather,
        "03n": cloud_weather,
        "04d": drizzle_weather,
        "04n": drizzle_weather,
        "09d": rain_weather,
        "09n": rain_weather,
        "10d": rain_weather,
        "10n": rain_weather,
        "13d": snow_weather,
        "13n": snow_weather,


    }
    const handleSearch = (e) => {
        setSearch(e.target.value)

    }
    // const searchCity = async (city) => {
    //     try {
    //         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         console.log(data)
    //         setWeatherData({
    //             humidity: data.main.humidity,
    //             wind_speed: data.wind.speed,
    //             temperature: Math.floor(data.main.temp),
    //             city: data.name,
    //             country: data.sys.country,
    //             icon: icons[data.weather[0].icon] || clear_weather
    //         })
    //     } catch (error) {
        // alert('Cannot connect to API or city not found')
        // setWeatherData(false)
    //     }
    // }
    const searchCity = (city) => {

        if (city === '') {
            alert('Enter a city name')
            return;

        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`)
            .then(res => res.json())
            .then((data) => {
                if (data.cod !== 200) {
                    alert(data.message)
                    setWeatherData(false)
                    return;
                }
                return (
                    setWeatherData({
                        humidity: data.main.humidity,
                        wind_speed: data.wind.speed,
                        temperature: Math.floor(data.main.temp),
                        city: data.name,
                        country: data.sys.country,
                        icon: icons[data.weather[0].icon] || clear_weather
                    })
                )
            })
            .catch((error) => {
                   alert('Cannot connect to API or city not found')
                   setWeatherData(false)
            })
    }

    useEffect(() => {
        searchCity('Toronto');
    }, [])
    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='Enter a city name'
                    onChange={(e) => handleSearch(e)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            searchCity(search)
                        }
                    }} />
                <img src={search_icon} alt="search_icon"
                    onClick={() => { searchCity(search) }}
                />
            </div>
            {weatherData &&
                <div className='weather'> <img className='weather-icon' src={weatherData.icon} alt="weather_image" />
                    <p className='temperature'>{weatherData.temperature}ºC</p>
                    <p className='location'>{weatherData.city}, {weatherData.country}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={humidity} alt="" />
                            <div>
                                <p>{weatherData.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind} alt="" />
                            <div>
                                <p>{weatherData.wind_speed} Km/h</p>
                                <span>Wind</span>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Weather
