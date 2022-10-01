import React from 'react'


export default function CurrentWeather(data) {
    const weather = data.weather;
    const forecast = data.forecast;
    console.log(weather);
    console.log(forecast);
  return (
    <div style={{
        backgroundColor:"grey",
        boxShadow: "6px",
        borderRadius:"6px",

    }}>
        <div>
            <h2>Current Weather</h2>
            <p>{JSON.stringify(weather)}</p>

            <h2>Forecast</h2>
            <p>{JSON.stringify(forecast)}</p>
        </div>


    </div>
  )
}
