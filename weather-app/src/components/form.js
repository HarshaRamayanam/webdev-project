import React from 'react'

function Weather_form () {

    return(

                <div>
                    <div className="flex-container">
                        <div>
                        <h3>Get weather forecast </h3>
                        <input type="text" placeholder="Enter city name"  className="searchBar" />
                        </div>
                    </div>
                </div>
            
    );
        }

export default Weather_form