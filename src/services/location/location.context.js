import React, { useState, useEffect, createContext } from "react";
import { locationRequest } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(null);

  const getLocation = (searchQuery) => {
    const queryString = searchQuery.toLowerCase().trim();
    setLoading(true);
    isError(null);
    setTimeout(async () => {
      try {
        const results = await locationRequest(queryString);
        setLocation(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        isError("no location found");
      }
    }, 2000);
  };

  useEffect(() => {
    getLocation(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        error,
        keyword,
        setKeyword,
        search: (searchQuery) => setKeyword(searchQuery),
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
