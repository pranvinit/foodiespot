import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";

// context imports
import { LocationContext } from "../../../services/location/location.context";

// RN-paper imports
import { Searchbar } from "react-native-paper";

// styled components
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export default function Search() {
  const { search, keyword } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="heart-outline"
        onChangeText={(value) => setSearchQuery(value)}
        onSubmitEditing={() => {
          if (!searchQuery.length) return;
          search(searchQuery);
        }}
        value={searchQuery}
      />
    </SearchContainer>
  );
}
