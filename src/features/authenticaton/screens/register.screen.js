import React, { useState, useContext, useEffect } from "react";

// context imports
import { AuthenticationContext } from "../../../services/authentication/auth.context";

// utils imports
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

// styled components imports
import {
  AccountCover,
  AccountOverlay,
  AccountOptionsContainer,
  AccountButton,
  AccountInput,
  AccountErrorContainer,
  AppTitle,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // auth context properties
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountCover>
      <AccountOverlay />
      <Spacer size="large" position="bottom">
        <AppTitle variant="label">FOODIESPOT</AppTitle>
      </Spacer>
      <AccountOptionsContainer>
        <AccountInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => setEmail(value)}
        />
        <Spacer size="large" position="bottom" />
        <AccountInput
          label="Password"
          value={password}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
        />
        <Spacer size="large" position="bottom" />
        <AccountInput
          label="Confirm Password"
          value={confPassword}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(value) => setConfPassword(value)}
        />
        <Spacer size="large" position="bottom" />
        <AccountButton
          icon="account"
          mode="contained"
          onPress={() => onRegister({ email, password })}
          isBig
        >
          Register
        </AccountButton>

        {error && (
          <AccountErrorContainer>
            <CustomText variant="error">{error}</CustomText>
          </AccountErrorContainer>
        )}
      </AccountOptionsContainer>
      <Spacer size="large" position="bottom" />
      <AccountButton
        icon="exit-to-app"
        mode="contained"
        onPress={() => navigation.navigate("Account")}
      >
        Back
      </AccountButton>
    </AccountCover>
  );
};
