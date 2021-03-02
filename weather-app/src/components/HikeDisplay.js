import React, { useState, useEffect } from "react";
import HikeDisplayCard from "./HikeDisplayCard";
import "./stylesheets/HikeDisplay.css";

const HikeDisplay = ({ data, searchBy, userInput }) => {
  // console.log(data);
  // console.log(data.length);
  // console.log(searchBy);
  // console.log(userInput);

  let cards = [];

  switch (searchBy) {
    case "hikeName":
      cards = [];
      data.forEach((trailInfo) => {
        let found = trailInfo.name.toLowerCase().match(userInput.toLowerCase());
        if (found != null) {
          cards.push(
            <HikeDisplayCard
              key={trailInfo.trail_id}
              name={trailInfo.name}
              avg_rating={trailInfo.avg_rating}
              difficulty_rating={trailInfo.difficulty_rating}
              state={trailInfo.state_name}
              loc={trailInfo._geoloc}
            />
          );
        }
      });

      break;
    case "state":
      cards = [];
      data.forEach((trailInfo) => {
        let found = trailInfo.state_name
          .toLowerCase()
          .match(userInput.toLowerCase());
        if (found != null) {
          cards.push(
            <HikeDisplayCard
              key={trailInfo.trail_id}
              name={trailInfo.name}
              avg_rating={trailInfo.avg_rating}
              difficulty_rating={trailInfo.difficulty_rating}
              state={trailInfo.state_name}
              loc={trailInfo._geoloc}
            />
          );
        }
      });
      break;
    default:
      break;
  }

  return (
    <>
      <h2 className="results">Results found: &nbsp; {cards.length}</h2>
      {cards}
    </>
  );
};

export default HikeDisplay;
