const baseURL = 'https://api.weatherapi.com/v1/current.json?key=bc114f2e826a41fcb93183552232611';

export const getWeatherDataForCity = async (city) =>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}