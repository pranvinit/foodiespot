import React, { useState } from "react";
import { TextInput } from "react-native-paper";

import { View } from "react-native";

// utils imports
import { Spacer } from "../../../components/spacer/spacer.component";

// styled components imports
import {
  AccountCover,
  AccountOverlay,
  AccountOptionsContainer,
  AccountButton,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountCover>
      <AccountOverlay />
      <AccountOptionsContainer>
        <View style={{ flexDirection: "row" }}>
          <AccountButton
            icon="lock-open"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AccountButton>
          <AccountButton
            icon="lock-open"
            mode="contained"
            onPress={() => navigation.navigate("Account")}
          >
            Back
          </AccountButton>
        </View>
      </AccountOptionsContainer>
    </AccountCover>
  );
};
