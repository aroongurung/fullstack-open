import { useEffect, useState } from "react"
import getWeather from "../services/weatherService"

const Weather = ({country}) => {
    const [weather, setWeather] = useState(null)

    const fetchWeather = () => {
        try {
            //Using latlng from capitalInfo
            const [lat, lon] = country.capitalInfo.latlng
            
            getWeather(lat, lon)
            .then(initialWeather => {
                setWeather(initialWeather)
            })
        } catch (error) {
            console.error('Error fetching Weather', error)
        }
    }

    useEffect(() => fetchWeather(), [])

    if (!weather) {
        return <div>Loading weather data...</div>
    }
    
    return (
        <div>
           <h2>Weather in {country.capital}</h2>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            {weather.weather[0].icon && (
                <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                alt={weather.weather[0].description}
                />
            )}
            <p>Wind: {weather.wind.speed} m/s</p>
           
        </div>
    )
}

export default Weather;