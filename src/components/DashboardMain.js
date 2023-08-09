import React, { useEffect, useState } from "react";

function DashboardMain(currentLocationData, currentLocationWeatherData) {
    const dayNames = ["Duminică","Luni", "Marți", "Miercuri", "Joi", "Viner", "Sâmbătă" ];
    const monthNames = [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie"
    ]


    
    const [locationWeather, setLocationWeather] = useState(currentLocationWeatherData);
    const [currentDate, setCurrentDate] = useState(new Date());
    const currentDayName = dayNames[currentDate.getDay()];


    const kelvinToFahrenheit = (tempK) => {
        return ((tempK - 273.15) * (9 / 5) + 32);
    }

    const kelvinToCelsius = (tempK) => {
        return tempK - 273.15;
    }

    useEffect(()=>{
        setLocationWeather(currentLocationWeatherData);
        console.log(locationWeather);
    }, [currentLocationWeatherData]);

    useEffect(()=>{
        const intervalDate = setTimeout(()=>{
            setCurrentDate(new Date());
        },1000);

        return () => {
            clearTimeout(intervalDate);
        }
    },[currentDate]);
    
    return (
    <div className="dashboardmain">
        <div>
            <span>Imagine vreme</span>
        </div>
        <div>
            {/* <h2>${currentDate}<span>${metricUnits ? '°C' : '°F' }</span></h2> */}
            <h2></h2>
        </div>
        <div>
            <h3>{currentDayName}, <span>{currentDate.getHours()}:{currentDate.getMinutes()}</span></h3>
            <h4>{currentDate.getDate()}  {monthNames[currentDate.getMonth()]}  {currentDate.getFullYear()}</h4>
        </div>

    </div>
    );

}

export default DashboardMain;
