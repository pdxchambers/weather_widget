import { useState, useEffect } from 'react';
import { GetForecastData } from '../utils/stdlib'
import Loading from './loading'

export default function Forecast() {
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetForecastData();
                setForecast(data.properties.periods);
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
    
    return (
      <div className="forecast__widget">
        {forecast.map((period, index) => (
          <div key={index} className="forecast__widget--period">
            <img src={period.icon} alt={period.shortForecast} class="forecast__widget--icon" />
            <p class="forecast__widget--name">{period.name}</p>
            <p class="forecast__widget--temp">{period.temperature}° F</p>
            <p class="forecast__widget--detail">{period.detailedForecast}</p>
          </div>
        ))}
      </div>
    )
}
