import React, { useRef, useEffect, useState, useContext } from "react";
import { LocationContext } from "./ContextStore";

const HikeDirections = ({ currLoc }) => {
  console.log("Current Loc: ", currLoc);

  const [location, setLocation] = useContext(LocationContext);
  console.log("Hike location: ", location);

  const mapContainer = useRef();
  const [lng, setLng] = useState(location.lng);
  const [lat, setLat] = useState(location.lat);
  const [zoom, setZoom] = useState(10);

  let stylingObject = {
    "div.mapContainer": {
      width: "100%",
      height: "300px",
    },
  };

  function setupMap(center) {
    window.mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFyc2hhYmR6IiwiYSI6ImNrbHJsbzZheDAxc3Iydm1zbXFsamZncTAifQ.3PFyd85ZhdRb4YNcxFVbFA";
    const map = new window.mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });

    const nav = new window.mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new window.MapboxDirections({
      accessToken: window.mapboxgl.accessToken,
    });
    directions.setOrigin([currLoc.lng, currLoc.lat]);
    directions.setDestination([lng, lat]);
    map.addControl(directions, "top-left");
    return map;
  }

  useEffect(() => {
    // console.log(location);
    const map = setupMap([currLoc.lng, currLoc.lat]);

    return () => map.remove();
  }, []);

  return (
    <div>
      <h3>
        Lng: {lng} Lat: {lat}
      </h3>
      <div
        className="mapContainer"
        ref={mapContainer}
        style={stylingObject["div.mapContainer"]}
      ></div>
    </div>
  );
};

export default HikeDirections;
