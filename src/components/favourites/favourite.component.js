import React, { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// context imports
import { FavouritesContext } from "../../services/favourites/favourites.context";

// styled components
const FavouritesIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
`;

export const Favourites = ({ restaurant }) => {
  // favourites context properties
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouritesIcon
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={26}
        color={isFavourite ? "#ff0000" : "#fff"}
      />
    </FavouritesIcon>
  );
};
