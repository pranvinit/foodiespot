import React, { useState } from "react";

// RN-paper imports
import { Searchbar } from "react-native-paper";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Searchbar
      placeholder="Search for a location"
      icon="heart"
      onChangeText={(value) => setSearchQuery(value)}
      value={searchQuery}
    />
  );
}
