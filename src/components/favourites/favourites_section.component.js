import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// component imports
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurant } from "../../components/restaurant/compact-restaurant-card.component";

const FavouritesContainer = styled.View`
  padding: 0 20px;
`;
export const FavouritesSection = ({ favourites, navigation }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesContainer horizontal>
      <ScrollView horizontal>
        {favourites.map((restaurant) => {
          return (
            <Spacer position="right" size="large" key={restaurant.name}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <CompactRestaurant restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesContainer>
  );
};
