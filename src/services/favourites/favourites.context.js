import React, { useState, useEffect, createContext } from "react";
import { storeFavourites, getFavourites } from "./favourites.service";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // add remove favourites logic
  const addToFavourites = (restaurant) => {
    setFavourites((prev) => [...prev, restaurant]);
  };

  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.filter(
      (r) => r.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (favourites.length) {
      storeFavourites(favourites);
    }
  }, [favourites]);

  useEffect(() => {
    const retriveFavList = async () => {
      const favList = await getFavourites();
      setFavourites(favList);
    };
    retriveFavList();
  }, []);

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
