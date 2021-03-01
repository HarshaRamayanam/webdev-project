import React, { useState, useEffect } from "react";
import HikeDisplay from "./HikeDisplay";
import "./stylesheets/HikeForm.css";

function HikeForm() {
  const [searchBy, setSearchBy] = useState("hikeName");
  const [trailData, setTrailData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  // console.log(searchBy);

  async function fetchTrailData() {
    const PATH_TO_JSON_DATA = `./datasets/hiketrails.json`;
    const response = await fetch(PATH_TO_JSON_DATA);
    const data = await response.json();
    setTrailData(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput(document.querySelector("#searchInput").value);
    setSearchBy(document.querySelector("#mySelect").value);
    setFormSubmit(true);
  };

  useEffect(() => {
    fetchTrailData().catch((err) => console.log("Error occurred!\n", err));
  }, []);

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <select className="form-control form-select btn-dark" id="mySelect">
              <option value="hikeName" defaultValue>
                Search By Hike Name
              </option>
              <option value="loc">Search By Hike Location</option>
            </select>
          </div>

          <label htmlFor="searchInput"></label>
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search for hikes"
            required
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <div>
        {formSubmit ? (
          <HikeDisplay
            data={trailData}
            searchBy={searchBy}
            userInput={userInput}
          />
        ) : null}
      </div>
    </div>
  );
}

export default HikeForm;
