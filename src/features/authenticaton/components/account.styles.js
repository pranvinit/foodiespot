import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";

// utils imports
import { colors } from "../../../infrastructure/theme/colors";

export const AccountOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff40;
`;

export const AccountCover = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
  resizeMode: "cover",
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountOptionsContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  background-color: #ffffff70;
  border-radius: 10px;
`;

export const AccountButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
