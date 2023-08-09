import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from 'react-icons/fa6';

import locationsData from './countries-cities.json'
import { normalize } from "normalize-diacritics";

function Header({isMenuOpen, setIsMenuOpen}) {

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setsearchResults] = useState(null);
    const [locationSuggestions, setLocationSuggestions] = useState([]);

    console.log(locationsData);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    }

    const searchLocation = async (input) => {
        
        
       
    }

    const clearLocationSuggestions = () => {
        setLocationSuggestions([]);
    }

    useEffect(()=>{
        console.log(locationSuggestions);

    },[locationSuggestions])

    useEffect(()=>{
        if(searchResults !== null){
            clearLocationSuggestions();
            searchResults.forEach(result => {
                console.log(result);
                const locationParts = result.display_name.split(', ');
                const city = locationParts[1];
                const country = locationParts[locationParts.length - 1];
                setLocationSuggestions((prevSuggestions) => [...prevSuggestions, {city, country}]);
            });
        }
    },[searchResults]);

    useEffect(()=>{

        console.log(`Search input - ${searchInput}`);
        if(searchInput !== "" && searchInput.length >= 3){
            searchLocation(searchInput);
        } else {
            setsearchResults(null);
            clearLocationSuggestions();
        }

    },[searchInput]);

    return (
        <>
            <header className="w-full h-20 bg-bgPrimary px-10">
                <div className="h-full flex flex-row justify-between items-center content-center">
                    <div>
                        <button className="text-white text-2xl" onClick={handleToggleMenu}>
                            <FaBars />
                        </button>
                    </div>
                    <div>
                        
                        <div className="flex flex-row items-center relative">
                            <div className="text-fgPrimary absolute left-2">
                                <FaSearch />
                            </div>
                            <input type="text" id="search-navbar" className="pl-8 py-1 pr-1 rounded-md text-fgPrimary bg-bgSecondary w-[450px]" placeholder="Search..." onInput={handleSearchInput} />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header