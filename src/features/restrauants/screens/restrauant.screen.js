import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

// components imports
import Search from "../components/search.component";
import RestrauantInfoCard from "../components/restrauant_info_card.component";

// utils imports
import { SafeArea } from "../../../components/utility/safe-area.component";

// context imports
import { RestaurantsContext } from "../../../services/restrauants/restrauant.context";

const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})``;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function RestrauantScreen() {
  const { restrauants, loading, error } = useContext(RestaurantsContext);
  if (loading) {
    return (
      <LoadingContainer>
        <Loading size={50} animating={true} color={Colors.blue300} />
      </LoadingContainer>
    );
  }
  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <ListContainer
        data={restrauants}
        renderItem={({ item }) => <RestrauantInfoCard restrauant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
