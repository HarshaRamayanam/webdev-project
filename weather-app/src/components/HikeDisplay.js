import React, { useState, useEffect } from "react";
import HikeDisplayCard from "./HikeDisplayCard";

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
              loc={trailInfo.state_name}
            />
          );
        }
      });

      break;
    case "loc":
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
              loc={trailInfo.state_name}
            />
          );
        }
      });
      break;
    default:
      break;
  }

  return <>{cards.slice(0, 6)}</>;
};

export default HikeDisplay;
