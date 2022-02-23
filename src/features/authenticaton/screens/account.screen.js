import React from "react";
import { Button } from "react-native";

// utils imports
import { SafeArea } from "../../../components/utility/safe-area.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Button
        title="register"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="login" onPress={() => navigation.navigate("Login")} />
    </SafeArea>
  );
};
