import styled from "styled-components/native";

// RN-paper imports
import { Card } from "react-native-paper";

// styled components
// makes logic and styles modular and adds semenatic reasoning to the components
export const RestaurantInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const CardOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #ffffff90;
`;

export const RestaurantCard = styled(Card)`
  position: relative;
  background-color: #fff;
  margin-bottom: ${(props) => props.theme.space[3]};
  overflow: hidden;
`;

export const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0px;
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MetaContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
