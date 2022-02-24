import React, { useContext } from "react";
import LottieView from "lottie-react-native";

import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
// styled components imports
import {
  AccountCover,
  AccountOverlay,
  AccountOptionsContainer,
  AccountButton,
  AppTitle,
  AnimationWrapper,
} from "../components/account.styles";

// context imports
import { AuthenticationContext } from "../../../services/authentication/auth.context";

export const AccountScreen = ({ navigation }) => {
  // auth context properties
  const { loading } = useContext(AuthenticationContext);

  return (
    <AccountCover>
      <AccountOverlay />
      <AnimationWrapper>
        <LottieView
          source={require("../../../../assets/burger.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>
      <Spacer size="xlarge" position="bottom" />
      <AppTitle variant="label">FOODIESPOT</AppTitle>
      <Spacer size="large" position="bottom" />
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
