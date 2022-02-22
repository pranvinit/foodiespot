import React from "react";

// components imports
import { CompactRestaurant } from "../../../components/restaurant/compact-restaurant-card.component";

export default function MapCallout({ restaurant }) {
  return <CompactRestaurant restaurant={restaurant} />;
}
