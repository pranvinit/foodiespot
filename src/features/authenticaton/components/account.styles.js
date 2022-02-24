import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";

// utils imports
import { colors } from "../../../infrastructure/theme/colors";

export const AccountOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.25);
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
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
`;

export const AccountButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: ${(props) => (props.isBig ? "250px" : "175px")};
`;

export const AccountInput = styled(TextInput)`
  width: 250px;
`;

export const AccountErrorContainer = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const AppTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: 32px;
`;
