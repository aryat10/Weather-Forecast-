const baseURL = 'https://api.weatherapi.com/v1/current.json?key=bc114f2e826a41fcb93183552232611';

// This is for city 
export const getWeatherDataForCity = async (city) =>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

// This is for Lattitude and Longitude of a particular region
export const getWeatherDataForLocation = async (lat,lon) =>{
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}
