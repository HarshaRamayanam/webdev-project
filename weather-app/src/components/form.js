import React from 'react'

function Weather_form () {

    return(

                <div>
                    <div className="flex-container">
                        <div>
                        <h4>Get weather forecast </h4>
                        <input type="text" placeholder="Enter city name"  className="searchBar" />
                        <button className="button" type="button">Search</button>
                        </div>
                    </div>
                </div>
            
    );
        }

export default Weather_form