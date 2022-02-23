import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

// navigators imports
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

// contexts imports
import { AuthenticationContext } from "../../services/authentication/auth.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
