import React, { useState, useEffect, createContext, useContext } from "react";
import { restrauantsRequest } from "./restrauant.service";

// context imports
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);

  const [restrauants, setRestrauants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(null);

  const getRestrauants = (location) => {
    setLoading(true);
    setRestrauants([]);
    setTimeout(async () => {
      try {
        const results = await restrauantsRequest(
          `${location.lat},${location.lng}`
        );
        setRestrauants(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        isError("no restrauants found");
      }
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      getRestrauants(location);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restrauants, getRestrauants, loading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
