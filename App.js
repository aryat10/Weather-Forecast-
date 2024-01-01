import { useEffect } from 'react';
import './App.css';
import Input from './components/input';
import Card from './components/card';
import Button from './components/button';
import { useWeather } from './context/weather';
function App() {
  const weather = useWeather();
  console.log(weather);
  useEffect(()=>{
    // Getting the location here 
    weather.fetchCurrentUserLocationData();
  },)


  return (
    <div className="App">
      <h1>Welcome to Weather Forcast</h1>
      
      <Input />
      <Button onClick = {weather.fetchData} value = 'Search' />
      <Card />
      <Button value = 'Refresh' />
    </div>
  );
}

export default App;
