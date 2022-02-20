import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

// fonts imports
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

// screen imports
import RestrauantScreen from "./src/features/restrauants/screens/restrauant.screen";

// components imports
import { theme } from "./src/infrastructure/theme";

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
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestrauantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
