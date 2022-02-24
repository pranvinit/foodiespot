import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
// styled components imports
import {
  AccountCover,
  AccountOverlay,
  AccountOptionsContainer,
  AccountButton,
  AppTitle,
} from "../components/account.styles";

// context imports
import { AuthenticationContext } from "../../../services/authentication/auth.context";

export const AccountScreen = ({ navigation }) => {
  // auth context properties
  const { loading } = useContext(AuthenticationContext);

  return (
    <AccountCover>
      <AccountOverlay />
      <Spacer size="large" position="bottom">
        <AppTitle variant="label">Foodiespot</AppTitle>
      </Spacer>
      <AccountOptionsContainer>
        {loading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <>
            <AccountButton
              icon="lock-open"
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </AccountButton>
            <Spacer position="bottom" size="large" />
            <AccountButton
              icon="account"
              mode="contained"
              title="login"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AccountButton>
          </>
        )}
      </AccountOptionsContainer>
    </AccountCover>
  );
};
