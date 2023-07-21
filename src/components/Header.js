import React, { useState } from "react";
import { FaBars } from 'react-icons/fa6';

function Header(props) {

    return (
        <>
            <header className="w-full h-20 bg-bgPrimary">
                <div>
                    <div>
                        <button className="" >
                            <FaBars />
                        </button>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header