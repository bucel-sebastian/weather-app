import React from "react";
import DashboardMain from "./DashboardMain";
import DashboardSec from "./DashboardSec";

function WeatherDashboad() {
    return (
    
            <div className="w-full h-full background-bgPrimary">
                <div>
                    <DashboardMain />
                </div>
                <div>
                    <DashboardSec />
                </div>
            </div>
    
    )
}

export default WeatherDashboad;