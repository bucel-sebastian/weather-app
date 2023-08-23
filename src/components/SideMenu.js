import React from "react";
import MyLocations from "./MyLocations";


function SideMenu() {
    return (<>
        <div>
            <h2>Locațiile mele</h2>
            <MyLocations />

            <div>
                Current location
            </div>
        </div>
    </>)
}

export default SideMenu;