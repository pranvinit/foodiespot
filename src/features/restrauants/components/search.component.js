import React, { useState } from "react";
import styled from "styled-components/native";

// RN-paper imports
import { Searchbar } from "react-native-paper";

// styled components
const SearchView = styled.View`
  padding: 16px;
`;

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SearchView>
      <Searchbar
        placeholder="Search for a location"
        icon="heart"
        onChangeText={(value) => setSearchQuery(value)}
        value={searchQuery}
      />
    </SearchView>
  );
}
