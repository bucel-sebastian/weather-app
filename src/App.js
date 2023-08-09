import React from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import WeatherDashboard from "./components/WeatherDashboard";

import api from "./components/api";

import { useState, useEffect } from "react";

import { useGeolocated } from "react-geolocated";

import styles from "./index.css";


function App() {

  const [currentLocationWeatherData, setCurrentLocationWeatherData] = useState(null);
  const [currentLocationData,setCurrentLocationData] = useState(null);




  const {coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
    watchLocationPermissionChange: true,
  });

  const getWeatherByLocation = async (lat,lon) => {
    const weatherResponse = await fetch(`${api.base}onecall?lang=ro&lat=${lat}&lon=${lon}&appid=${api.key}`);
    const weatherJson = await weatherResponse.json();
    // const weatherJson=["test","test"];
    // await console.log(weatherJson);

    setCurrentLocationWeatherData(await weatherJson);
  }


  const getLocationName = async (lat,lon) => {
    const geocodingResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    const geocodingJson = await geocodingResponse.json();
    setCurrentLocationData(await geocodingJson);
  }

  useEffect(()=>{
    console.log(coords);


    !isGeolocationAvailable ? (console.log(null)

    ) : (!isGeolocationEnabled ? console.log(null)
      
     : (coords ? getWeatherByLocation(coords.latitude,coords.longitude) : (console.log(null))));
    
     !isGeolocationAvailable ? (console.log(null)

    ) : (!isGeolocationEnabled ? console.log(null)
      
     : (coords ? getLocationName(coords.latitude,coords.longitude) : (console.log(null))));

  },[coords]);


  useEffect(()=>{
    console.log('weather data ',currentLocationWeatherData);
    console.log('location data ',currentLocationData);
  },[currentLocationWeatherData,currentLocationData]);

  const [isMenuOpen,setIsMenuOpen] = useState(false);

 
  return (
    <div className="App w-full h-screen relative flex flex-col">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="w-full h-full bg-bgSecondary flex row">
        <div
          className={` transition-width ${
            isMenuOpen ? 'w-1/6' : 'w-[0%]'
          } h-full bg-bgPrimary transform-gpu ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } duration-300`}
        >
          <SideMenu />
        </div>
        <div
          className={`transition-transform ${
            isMenuOpen ? 'w-5/6' : 'w-full'
          } h-full bg-bgSecondary transform-gpu  duration-300`}
        >
          <WeatherDashboard currentLocationData={currentLocationData} currentLocationWeatherData={currentLocationWeatherData} />
        </div>
      </div>
    </div>
  
    );

}

export default App;