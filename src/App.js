import './App.css';
import Search from './components/search';
import CurrentWeather from './components/current-weather';
import { useState } from 'react';

function App() {
  const [weather,setWeather] = useState({});
  const [forecast,setForecast] =useState({})
  const handleOnSearchChange = (searchData)=>{
   const [lat,lon] = searchData.value.split(' ');
  //  const [lat,lon] = searchData.value.split(' ');
  console.log(process.env.REACT_APP_RAPID_KEY)
  console.log(process.env.REACT_APP_WEATHER_KEY)
  const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
  const forecastWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
  Promise.all([currentWeatherFetch,forecastWeatherFetch])
  .then(async(response)=>{
    console.log(response)
    const weatherRes = await response[0].json();
    const forecastRes = await response[1].json();
    setForecast({city:searchData.label, ...forecastRes})
    setWeather({city:searchData.label, ...weatherRes})
    console.log(weatherRes)
console.log(forecastRes)
  })
  .catch((err)=>console.log(err));
}
console.log(weather)
console.log(forecast)
  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      <CurrentWeather weather={weather} forecast={forecast}/>
    </div>
  );
}

export default App;
