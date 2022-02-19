import React from "react";
import styled from "styled-components/native";

// RN-paper imports
import { Card } from "react-native-paper";

// styled components
// makes logic and styles modular and adds semenatic reasoning to the components
const Title = styled.Text`
  padding: 16px;
`;

const RestrauantCard = styled(Card)`
  background-color: #fff;
`;

const RestrauantCover = styled(Card.Cover)`
  padding: 20px;
  background-color: #fff;
`;

export default function RestrauantInfoCard({ restrauant = {} }) {
  // de-structuring properties from restrauant object

  const {
    name = "Some random restrauant",
    icon,
    photos = [
      "https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "123 some random street NYC",
    isOpen = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restrauant;
  return (
    <RestrauantCard elevation={5}>
      <RestrauantCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestrauantCard>
  );
}
