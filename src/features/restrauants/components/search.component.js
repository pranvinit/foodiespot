import React, { useState, useContext } from "react";

// context imports
import { LocationContext } from "../../../services/location/location.context";

// RN-paper imports
import { Searchbar } from "react-native-paper";

export default function Search() {
  const { search, keyword } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  return (
    <Searchbar
      placeholder="Search for a location"
      icon="heart"
      onChangeText={(value) => setSearchQuery(value)}
      onSubmitEditing={() => {
        if (!searchQuery.length) return;
        search(searchQuery);
      }}
      value={searchQuery}
    />
  );
}
