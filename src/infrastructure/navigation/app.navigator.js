import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// context imports
import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

// navigators imports
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

// screens imports
import MapScreen from "../../features/map/screens/map.screen";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Checkout: "md-cart",
    Settings: "md-settings",
  };
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "grey",
              tabBarShowLabel: false,
            }}
          >
            <Tab.Screen
              name="RestaurantsNavigator"
              component={RestaurantsNavigator}
              options={{
                tabBarLabel: "Restaurants",
                tabBarIcon: ({ color, size, focused }) => (
                  <Ionicons
                    name={TAB_ICON.Restaurants}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Map"
              component={MapScreen}
              options={{
                tabBarLabel: "Map",
                tabBarIcon: ({ color, size, focused }) => (
                  <Ionicons name={TAB_ICON.Map} color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="SettingsNavigator"
              component={SettingsNavigator}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size, focused }) => (
                  <Ionicons
                    name={TAB_ICON.Settings}
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
