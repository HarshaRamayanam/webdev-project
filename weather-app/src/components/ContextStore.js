import React, { useState } from "react";

export const LocationContext = React.createContext();
export const BgContext = React.createContext();

export const LocationProvider = (props) => {
  const [location, setLocation] = useState({});

  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {props.children}
    </LocationContext.Provider>
  );
};
// export const BgProvider = (props) => {
//   const [bgImage, setBgImage] = useState("");

//   return (
//     <BgContext.Provider value={[bgImage, setBgImage]}>
//       {props.children}
//     </BgContext.Provider>
//   );
// };