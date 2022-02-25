import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components/native";
import { FlatList, RefreshControl, Pressable } from "react-native";
import { ActivityIndicator, Colors, Button } from "react-native-paper";

// components imports
import Search from "../components/search.component";
import RestaurantInfoCard from "../components/restaurant.component";
import { FavouritesSection } from "../../../components/favourites/favourites_section.component";

// utils imports
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

// context imports
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { LocationContext } from "../../../services/location/location.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

export const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const ErrorContainer = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default function ({ navigation }) {
  // restaurants context properties
  const {
    restaurants,
    loading: restaurantsLoading,
    error: restaurantsError,
  } = useContext(RestaurantsContext);

  // location context properties

  const {
    setKeyword,
    loading: locationLoading,
    error: locationError,
  } = useContext(LocationContext);

  // favourites context properties
  const { favourites } = useContext(FavouritesContext);
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  // useEffect(() => onLogout(), []);

  if (restaurantsLoading || locationLoading) {
    return (
      <LoadingContainer>
        <Loading size={50} animating={true} color={Colors.blue300} />
      </LoadingContainer>
    );
  }
  if (restaurantsError || locationError) {
    return (
      <ErrorContainer>
        <Spacer position="bottom" size="large">
          <CustomText variant="error">NO RESTAURANTS FOUND</CustomText>
        </Spacer>
        <Button
          icon="reload"
          mode="outlined"
          onPress={() => setKeyword("san francisco")}
        >
          reload
        </Button>
      </ErrorContainer>
    );
  }

  return (
    <SafeArea>
      <Search
        favouritesToggled={isFavouritesToggled}
        onFavouritesToggled={setIsFavouritesToggled}
      />
      {isFavouritesToggled && (
        <FavouritesSection favourites={favourites} navigation={navigation} />
      )}
      <Spacer size="medium" position="bottom" />
      <ListContainer
        data={restaurants}
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
        refreshControl={
          <RefreshControl
            refreshing={restaurantsLoading || locationLoading}
            onRefresh={() => setKeyword("san francisco")}
            colors={[Colors.blue300, Colors.red300]}
          />
        }
      />
    </SafeArea>
  );
}
