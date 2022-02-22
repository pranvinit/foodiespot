import React, { useContext } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

// component imports
import { CompactRestaurant } from "../../components/restaurant/compact-restaurant-card.component";

const FavouritesContainer = styled.View`
  padding: 20px;
`;
export const FavouritesSection = ({ favourites }) => {
  return (
    <FavouritesContainer horizontal>
      <ScrollView horizontal>
        {favourites.map((restaurant) => {
          return <CompactRestaurant restaurant={restaurant} />;
        })}
      </ScrollView>
    </FavouritesContainer>
  );
};
