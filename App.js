import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// screen imports
import RestrauantScreen from "./src/features/restrauants/screens/restrauant.screen";

export default function App() {
  return (
    <>
      <RestrauantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
