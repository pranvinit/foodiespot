import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, RefreshControl } from "react-native";
import { ActivityIndicator, Colors, Button } from "react-native-paper";

// components imports
import Search from "../components/search.component";
import RestrauantInfoCard from "../components/restrauant_info_card.component";

// utils imports
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";

// context imports
import { RestaurantsContext } from "../../../services/restrauants/restrauant.context";
import { LocationContext } from "../../../services/location/location.context";

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
const ErrorContainer = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default function RestrauantScreen() {
  const {
    restrauants,
    loading: restrauantsLoading,
    error: restrauantsError,
  } = useContext(RestaurantsContext);
  const {
    setKeyword,
    loading: locationLoading,
    error: locationError,
  } = useContext(LocationContext);

  if (restrauantsLoading || locationLoading) {
    return (
      <LoadingContainer>
        <Loading size={50} animating={true} color={Colors.blue300} />
      </LoadingContainer>
    );
  }
  if (restrauantsError || locationError) {
    return (
      <ErrorContainer>
        <Spacer position="bottom" size="large">
          <CustomText variant="error">NO RESTRAUANTS FOUND</CustomText>
        </Spacer>
        <Button
          icon="reload"
          mode="outlined"
          onPress={() => setKeyword("san francisco")}
        >
          reload
        </Button>
      </ErrorContainer>
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
        refreshControl={
          <RefreshControl
            refreshing={restrauantsLoading || locationLoading}
            onRefresh={() => setKeyword("san francisco")}
            colors={[Colors.blue300, Colors.red300]}
          />
        }
      />
    </SafeArea>
  );
}
