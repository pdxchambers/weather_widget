import { useState, useEffect } from 'react';
import { ConvertToFahrenheit, GetLatestObservation } from '../utils/stdlib'
import Icon from './icon'
import Loading from './loading'

export default function Temperature() {
    const [temp, setTemp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetLatestObservation();
                setTemp(ConvertToFahrenheit(JSON.stringify(data.properties.temperature.value)));
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
        <div id='curTemp__widget'>
            <Icon temp={temp} className='curTemp__widget--icon' /> <span className='curTemp__widget--temp'>{temp}° F</span>
        </div>
    )
  }
  