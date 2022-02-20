import React from "react";
import { Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// fonts imports
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

// screen imports
import RestrauantScreen from "./src/features/restrauants/screens/restrauant.screen";

// components imports
import { theme } from "./src/infrastructure/theme";

// utils imports
import { SafeArea } from "./src/components/utility/safe-area.component";

// navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// context imports
import { RestaurantsContextProvider } from "./src/services/restrauants/restrauant.context";

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

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Checkout: "md-cart",
    Settings: "md-settings",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "grey",
              }}
            >
              <Tab.Screen
                name="Restrauants"
                component={RestrauantScreen}
                options={{
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
                  tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons name={TAB_ICON.Map} color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
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
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
