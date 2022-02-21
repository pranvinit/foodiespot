import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components/native";

// context imports
import { LocationContext } from "../../../services/location/location.context";

// RN-paper imports
import { Searchbar } from "react-native-paper";

// styled components
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

export default function MapSearch() {
  const { search, keyword } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon="map"
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
