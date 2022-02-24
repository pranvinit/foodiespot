import styled from "styled-components/native";
import { StatusBar, SafeAreaView } from "react-native";
// styled components
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: #fff;
`;
