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
          let hikeinfoObj = {
            name: trailInfo.name,
            area_name: trailInfo.area_name,
            city_name: trailInfo.city_name,
            state_name: trailInfo.state_name,
            country_name: trailInfo.country_name,
            _geoloc: trailInfo._geoloc,
            popularity: trailInfo.popularity,
            length: trailInfo.length,
            elevation_gain: trailInfo.elevation_gain,
            difficulty_rating: trailInfo.difficulty_rating,
            route_type: trailInfo.route_type,
            visitor_usage: trailInfo.visitor_usage,
            avg_rating: trailInfo.avg_rating,
            num_reviews: trailInfo.num_reviews,
            features: trailInfo.features,
            activities: trailInfo.activities,
            units: trailInfo.units,
          };
          cards.push(
            <HikeDisplayCard key={trailInfo.trail_id} infoObj={hikeinfoObj} />
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
          let hikeinfoObj = {
            name: trailInfo.name,
            area_name: trailInfo.area_name,
            city_name: trailInfo.city_name,
            state_name: trailInfo.state_name,
            country_name: trailInfo.country_name,
            _geoloc: trailInfo._geoloc,
            popularity: trailInfo.popularity,
            length: trailInfo.length,
            elevation_gain: trailInfo.elevation_gain,
            difficulty_rating: trailInfo.difficulty_rating,
            route_type: trailInfo.route_type,
            visitor_usage: trailInfo.visitor_usage,
            avg_rating: trailInfo.avg_rating,
            num_reviews: trailInfo.num_reviews,
            features: trailInfo.features,
            activities: trailInfo.activities,
            units: trailInfo.units,
          };
          cards.push(
            <HikeDisplayCard key={trailInfo.trail_id} infoObj={hikeinfoObj} />
          );
        }
      });
      break;
    default:
      break;
  }

  return (
    <>
      <h2 className="results">Hikes found: &nbsp; {cards.length}</h2>
      {cards}
    </>
  );
};

export default HikeDisplay;
