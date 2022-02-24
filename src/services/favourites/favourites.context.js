import React, { useState, useEffect, createContext, useContext } from "react";
import { storeFavourites, getFavourites } from "./favourites.service";

// context imports
import { AuthenticationContext } from "../authentication/auth.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const { user } = useContext(AuthenticationContext);

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
      storeFavourites(user, favourites);
    }
  }, [favourites]);

  useEffect(() => {
    const retriveFavList = async () => {
      const favList = await getFavourites(user);
      if (favList?.length) {
        setFavourites(favList);
      }
    };
    retriveFavList();
  }, [user]);

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
