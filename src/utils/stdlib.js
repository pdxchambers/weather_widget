const locationData = {
    stationID: 'KUAO',
    coordinates: {lat: 45.6501, long: -122.2466},
}

export async function GetStationData(){
    const lat = locationData.coordinates.lat;
    const long = locationData.coordinates.long;
    const url = `https://api.weather.gov/points/${lat},${long}`;
    try {
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const stationData = await response.json();
        
        return stationData;
    } catch (error) {
        console.error(error.message);
    }
  }
  
  export async function GetForecastData(){
    
    const stationData = await GetStationData();
    const url = stationData.properties.forecast;

    try{
      const response = await fetch(url, {
        method: 'GET'
      });
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const weatherJSON = await response.json();
      console.log(weatherJSON);
      return weatherJSON;
      
    } catch(error){
      console.error(error.message);
    }
  }

  export async function GetLatestObservation(){
    const url = `https://api.weather.gov/stations/${locationData.stationID}/observations/latest?require_qc=false`;

    try{
      const response = await fetch(url, {
        method: 'GET'
      });
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const weatherJSON = await response.json();
      console.log(weatherJSON);
      return weatherJSON;
      
    } catch(error){
      console.error(error.message);
    }
  }

  export function ConvertToFahrenheit(celsius){
    return Math.round(celsius * 9/5 + 32);
  }