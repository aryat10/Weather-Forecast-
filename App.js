import './App.css';
import Input from './components/input';
import Card from './components/card';
import Button from './components/button';
import { useWeather } from './context/weather';
function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <div className="App">
      <h1>Welcome to Weather Forcast</h1>
      {/* <img src='https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_1280.jpg' alt=''></img> */}
      <Input />
      <Button onClick = {weather.fetchData} value = 'Search' />
      <Card />
      <Button value = 'Refresh' />
    </div>
  );
}

export default App;
