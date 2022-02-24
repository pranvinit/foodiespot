import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";

import { CustomText } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

// context imports
import { AuthenticationContext } from "../../../services/authentication/auth.context";

// styled components imports
import {
  SettingsContainer,
  UserInfoContainer,
} from "../components/settings.styles";

export default function SettingsScreen({ navigation }) {
  const { user, onLogout } = useContext(AuthenticationContext);
  return (
    <SettingsContainer>
      <UserInfoContainer>
        <Avatar.Icon size={100} icon="human" color="#fff" />
        <Spacer size="medium" position="top" />
        <CustomText variant="label">{user.email}</CustomText>
      </UserInfoContainer>
      <List.Section>
        <List.Item
          title="Favourites"
          description="View your favourites"
          left={() => <List.Icon icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="Logout"
          left={() => <List.Icon icon="logout-variant" />}
          onPress={() => onLogout()}
        ></List.Item>
      </List.Section>
    </SettingsContainer>
  );
}
