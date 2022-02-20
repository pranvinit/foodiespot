import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
// restrauants screen imports
import RestrauantScreen from "../../features/restrauants/screens/restrauant.screen";
import RestaurantDetailScreen from "../../features/restrauants/screens/restrauant_detail";

export const RestaurantsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <Stack.Screen name="Restrauants" component={RestrauantScreen} />
      <Stack.Screen
        name="RestrauantDetail"
        component={RestaurantDetailScreen}
      />
    </Stack.Navigator>
  );
};
