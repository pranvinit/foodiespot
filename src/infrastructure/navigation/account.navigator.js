import React, { useState, useEffect, useContext } from "react";

// screens imports
import { AccountScreen } from "../../features/authenticaton/screens/account.screen";
import { RegisterScreen } from "../../features/authenticaton/screens/register.screen";
import { LoginScreen } from "../../features/authenticaton/screens/login.screen";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
