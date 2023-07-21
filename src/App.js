import React from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import WeatherDashboad from "./components/WeatherDashboard";

import { useState, useEffect } from "react";

import styles from "./index.css";


function App() {

 
  return (
    <div className="App w-full h-screen relative flex flex-col">
      <Header />
      
      <div className="w-full h-full bg-bgSecondary flex row">
        <div className={`transition ${false ? 'w-1/6' : 'w-0'}  h-full bg-bgPrimary `}>
          <SideMenu />
        </div>
        <div className={`transition ${false ? 'w-4/6' : 'w-full'} h-full bg-bgSecondary `} >
          <WeatherDashboad />
        </div>
      </div>
    </div>
  );

}

export default App;