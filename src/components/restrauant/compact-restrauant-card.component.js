import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
// components imports
import { CustomText } from "../typography/text.component";

const CompactContainer = styled.View`
  padding: 10px;
  align-items: center;
  max-width: 150px;
`;

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 150px;
  height: 200px;
`;

export const CompactRestrauant = ({ restrauant }) => {
  console.log(restrauant.photos);
  return (
    <CompactContainer>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: restrauant.photos[0] }}
      />
      <CustomText variant="label"> {restrauant.name} </CustomText>
    </CompactContainer>
  );
};
