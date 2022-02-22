import React, { useState, useEffect, createContext, useContext } from "react";
import { restaurantsRequest } from "./restaurant.service";

// context imports
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(null);

  const getRestaurants = (location) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(async () => {
      try {
        const results = await restaurantsRequest(
          `${location.lat},${location.lng}`
        );
        setRestaurants(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        isError("no restaurants found");
      }
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      getRestaurants(location);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, getRestaurants, loading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
