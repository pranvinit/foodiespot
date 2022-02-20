import React, { useState, useEffect, createContext } from "react";
import { restrauantsRequest } from "./restrauant.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restrauants, setRestrauants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(null);

  const getRestrauants = (location) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        setLoading(false);
        const results = await restrauantsRequest();
        setRestrauants(results);
      } catch (error) {
        setLoading(false);
        isError("no restrauants found");
      }
    }, 2000);
  };
  useEffect(() => {
    getRestrauants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restrauants, loading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
