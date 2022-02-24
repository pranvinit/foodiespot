import React, { useContext } from "react";
import { Pressable } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

import { ListContainer } from "../../../features/restaurants/screens/restaurant.screen";
import RestaurantInfoCard from "../../restaurants/components/restaurant.component";

// context imports
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { CenteredView } from "../components/settings.styles";

export default function FavouritesScreen({ navigation }) {
  const { favourites } = useContext(FavouritesContext);
  if (!favourites?.length) {
    return (
      <CenteredView>
        <CustomText vairant="body">No Favourites Yet</CustomText>
      </CenteredView>
    );
  }
  return (
    <>
      <Spacer position="bottom" size="large" />
      <ListContainer
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              {({ pressed }) => (
                <RestaurantInfoCard restaurant={item} pressed={pressed} />
              )}
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
}
