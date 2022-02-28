import React, { useState, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { List, Avatar, Divider } from "react-native-paper";

import { CustomText } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import AsyncStorage from "@react-native-async-storage/async-storage";

// context imports
import { AuthenticationContext } from "../../../services/authentication/auth.context";

// styled components imports
import {
  SettingsContainer,
  UserInfoContainer,
  SettingsCover,
  ListItem,
} from "../components/settings.styles";

export default function SettingsScreen({ navigation }) {
  const { user, onLogout } = useContext(AuthenticationContext);

  const [photoUri, setPhotoUri] = useState(null);
  const getPhotoUri = async () => {
    const photo = await AsyncStorage.getItem(`@${user.uid}_photo_uri`);
    setPhotoUri(photo);
  };

  useFocusEffect(() => {
    getPhotoUri();
  });

  return (
    <>
      <SettingsCover />
      <SettingsContainer>
        <UserInfoContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {photoUri ? (
              <Avatar.Image
                size={100}
                source={{ uri: photoUri }}
                color="#fff"
              />
            ) : (
              <Avatar.Icon size={100} icon="human" color="#fff" />
            )}
          </TouchableOpacity>
          <Spacer size="medium" position="top" />
          <CustomText variant="label">{user.email}</CustomText>
        </UserInfoContainer>
        <List.Section>
          <Divider />
          <ListItem
            title="Favourites"
            description="View your favourites"
            left={() => <List.Icon icon="heart" />}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Divider />
          <Spacer position="bottom" size="medium" />
          <ListItem
            title="Logout"
            left={() => <List.Icon icon="logout-variant" />}
            onPress={() => onLogout()}
          />
          <Divider />
        </List.Section>
      </SettingsContainer>
    </>
  );
}
