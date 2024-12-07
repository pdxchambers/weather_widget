import { useState, useEffect } from 'react';
import { ConvertToFahrenheit, GetLatestObservation } from '../utils/stdlib'
import Loading from './loading'

export default function Conditions() {
    const [observation, setObservation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetLatestObservation();
                setObservation(data.properties);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <Loading />;

    if (error) return <p>Error: {error.message}</p>;
    var presentWeatherCond = "";
    if (observation.presentWeather.weather !== undefined && observation.presentWeather.weather !== null) {
        presentWeatherCond = "Current Conditions: " + observatoin.presentWeather.intensity + " " + observation.presentWeather.weather;
    }
    return (
      <div className="conditions__widget">
        <h2>Current Conditions</h2>
        {presentWeatherCond}
        <p>Temperature: {Math.round(ConvertToFahrenheit(observation.temperature.value))}° F</p>
        <p>Wind Speed: {Math.round(observation.windSpeed.value)} km/h</p>
        <p>Barometric Pressure: {Math.round(observation.barometricPressure.value)} Pa</p>
        <p>Humidity: {Math.round(observation.relativeHumidity.value)}%</p>
        <p>Wind Chill: {Math.round(ConvertToFahrenheit(observation.windChill.value))}° F</p>
      </div>
    )
}
