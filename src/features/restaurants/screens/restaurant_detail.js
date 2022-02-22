import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Divider, List } from "react-native-paper";
import styled from "styled-components/native";

// utils imports
import { SafeArea } from "../../../components/utility/safe-area.component";

// components imports
import RestaurantInfoCard from "../components/restaurant.component";

// styled components
const RestaurantInfoCardContainer = styled.View`
  padding: 20px;
  padding-bottom: 0;
`;

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCardContainer>
        <RestaurantInfoCard restaurant={restaurant} />
      </RestaurantInfoCardContainer>
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => (
            <List.Icon
              {...props}
              icon="bread-slice"
              color={breakfastExpanded ? "tomato" : "grey"}
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
          <Divider />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              color={lunchExpanded ? "tomato" : "grey"}
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
          <Divider />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-variant"
              color={dinnerExpanded ? "tomato" : "grey"}
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
          <Divider />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => (
            <List.Icon
              {...props}
              icon="cup"
              color={drinksExpanded ? "tomato" : "grey"}
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
          <Divider />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
}
