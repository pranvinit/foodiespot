import styled from "styled-components/native";

// RN-paper imports
import { Card } from "react-native-paper";

// styled components
// makes logic and styles modular and adds semenatic reasoning to the components
export const RestrauantInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestrauantCard = styled(Card)`
  background-color: #fff;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestrauantCover = styled(Card.Cover)`
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
