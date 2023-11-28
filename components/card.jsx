import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
    const weather = useWeather();
    console.log(weather);
    return(
        <div className="card">
            <img src= {weather?.data?.current?.condition?.icon} alt=""></img>
            <h2> {weather.data?.current?.temp_c} ^C </h2>
        </div>
    )
}

export default Card;
