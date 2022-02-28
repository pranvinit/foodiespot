import React, { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

// component imports
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurant } from "../../components/restaurant/compact-restaurant-card.component";
import { Card } from "react-native-paper";

const FavouritesContainer = styled.View`
  margin: ${(props) => props.theme.space[2]} 0;
`;

const FavouritesCard = styled(Card)`
  border-radius: 10px;
  padding: 10px;
`;

export const FavouritesSection = ({ favourites, navigation }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesContainer horizontal>
      <FavouritesCard elevation={3}>
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
      </FavouritesCard>
    </FavouritesContainer>
  );
};
