import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";
// styled components imports
import {
  AccountCover,
  AccountOverlay,
  AccountOptionsContainer,
  AccountButton,
  AppTitle,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountCover>
      <AccountOverlay />
      <Spacer size="large" position="bottom">
        <AppTitle variant="label">Foodiespot</AppTitle>
      </Spacer>
      <AccountOptionsContainer>
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
      </AccountOptionsContainer>
    </AccountCover>
  );
};
