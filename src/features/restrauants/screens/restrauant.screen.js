import React from "react";
import styled from "styled-components/native";
import { StatusBar, FlatList } from "react-native";

// components imports
import Search from "../components/search.component";
import RestrauantInfoCard from "../components/restrauant_info_card.component";

// styled components
const SafeArea = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestrauantScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <ListContainer
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestrauantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
