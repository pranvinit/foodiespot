import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
// components imports
import { CustomText } from "../typography/text.component";

const isAndroid = Platform.OS === "android";

const CompactContainer = styled.View`
  padding: 10px;
  margin: 0 auto;
  align-items: center;
  max-width: 150px;
`;

const CompactWebViewImage = styled(WebView)`
  width: 120px;
  height: 100px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 150px;
  height: 150px;
`;

export const CompactRestaurant = ({ restaurant }) => {
  return (
    <CompactContainer>
      {isAndroid ? (
        <CompactWebViewImage source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <CustomText variant="label"> {restaurant.name} </CustomText>
    </CompactContainer>
  );
};
