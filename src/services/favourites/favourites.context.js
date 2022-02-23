import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  // storing favorites list locally
  const storeFavourites = async () => {
    try {
      const jsonFavourites = JSON.stringify(favourites);
      await AsyncStorage.setItem("@favourites", jsonFavourites);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (favourites.length) {
      storeFavourites();
    }
  }, [favourites]);

  // reteriving favourites list
  const getFavourites = async () => {
    try {
      const jsonFavourites = await AsyncStorage.getItem("@favourites");
      if (jsonFavourites !== null) {
        setFavourites(JSON.parse(jsonFavourites));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFavourites();
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
