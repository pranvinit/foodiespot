import React, { useState, useEffect, createContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (restaurant) => {
    setFavourites((prev) => [...prev, restaurant]);
  };

  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.map(
      (r) => r.place_id !== restaurant.place_id
    );
    console.log(newFavourites);
    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
