import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

// components imports
import Search from "../components/search.component";
import RestrauantInfoCard from "../components/restrauant_info_card.component";

// styled components
const Layout = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const ListView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #00ff;
`;

export default function RestrauantScreen() {
  return (
    <Layout>
      <Search />
      <ListView>
        <RestrauantInfoCard />
      </ListView>
    </Layout>
  );
}
