import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// utils imports
import { SafeArea } from "../../components/utility/safe-area.component";

// navigators imports
import { RestaurantsNavigator } from "./restrauants.navigator";

export const MapScreen = () => {
  return (
    <SafeArea>
      <Text>This is a map screen</Text>
    </SafeArea>
  );
};
export const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>This is a settings screen</Text>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Checkout: "md-cart",
    Settings: "md-settings",
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tab.Screen
        name="RestrauantsNavigator"
        component={RestaurantsNavigator}
        options={{
          tabBarLabel: "Restrauants",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={TAB_ICON.Restaurants} color={color} size={size} />
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
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={TAB_ICON.Settings} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
