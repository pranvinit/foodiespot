import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // auth context properties
  const { onLogin, error, loading, user } = useContext(AuthenticationContext);

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
        {loading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <AccountButton
            icon="lock-open"
            mode="contained"
            onPress={() => onLogin({ email, password })}
            isBig
          >
            Login
          </AccountButton>
        )}

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
