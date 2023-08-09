import React from "react";
import DashboardMain from "./DashboardMain";
import DashboardSec from "./DashboardSec";

function WeatherDashboard(currentLocationData, currentLocationWeatherData) {
    return (
    
            <div className="w-full h-full background-bgPrimary">
                <div>
                    <DashboardMain currentLocationData={currentLocationData} currentLocationWeatherData={currentLocationWeatherData} />
                </div>
                <div>
                    <DashboardSec currentLocationData={currentLocationData} currentLocationWeatherData={currentLocationWeatherData} />
                </div>
            </div>
    
    )
}

export default WeatherDashboard;