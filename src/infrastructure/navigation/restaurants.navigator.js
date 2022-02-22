import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
// restaurants screen imports
import RestaurantScreen from "../../features/restaurants/screens/restaurant.screen";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant_detail";

export const RestaurantsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <Stack.Screen name="Restaurants" component={RestaurantScreen} />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};
