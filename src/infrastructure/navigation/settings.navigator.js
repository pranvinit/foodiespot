import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screen imports
import SettingsScreen from "../../features/settings/screens/settings.screen";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};
