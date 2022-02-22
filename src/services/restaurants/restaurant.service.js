import { mocks, mockImages } from "./mock";
import camelize from "camelize";

const transformRestaurants = ({ results } = []) => {
  const transformedRestraunts = results.map((restaurant) => ({
    ...restaurant,
    isOpen: restaurant.opening_hours?.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    address: restaurant.vicinity,
    photos: mockImages.map(
      (image) => mockImages[Math.floor(Math.random() * mockImages.length)]
    ),
  }));
  const result = camelize(transformedRestraunts);
  return result;
};

export const restaurantsRequest = async (location) => {
  const restaurants = mocks[location];
  if (!restaurants) {
    throw new Error("not found");
  }
  return transformRestaurants(restaurants);
};
