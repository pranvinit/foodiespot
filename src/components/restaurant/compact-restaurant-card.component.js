import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
// components imports
import { CustomText } from "../typography/text.component";

const isAndroid = Platform.OS === "android";

const CompactContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
  align-items: center;
  max-width: 150px;
`;

const CompactWebViewImage = styled(WebView)`
  width: 120px;
  height: 100px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CompactRestaurant = ({ restaurant, isMap }) => {
  return (
    <CompactContainer>
      {isAndroid && isMap ? (
        <CompactWebViewImage source={{ uri: restaurant.photos[0] }} />
      ) : (
        <CompactImage source={{ uri: restaurant.photos[0] }} />
      )}
      <CustomText variant="label"> {restaurant.name} </CustomText>
    </CompactContainer>
  );
};
