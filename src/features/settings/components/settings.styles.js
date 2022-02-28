import { ImageBackground } from "react-native";
import { List } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsContainer = styled(SafeArea)`
  background-color: transparent;
`;

export const SettingsCover = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
  resizeMode: "cover",
})`
  position: absolute;
  top: -0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.75;
`;

export const ListItem = styled(List.Item)`
  background-color: rgba(255, 255, 255, 0.4);
`;

export const UserInfoContainer = styled.View`
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
