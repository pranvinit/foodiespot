import camelize from "camelize";
import { locations } from "./location.mock";

export const transformLocation = (location) => {
  const transformedLocation = camelize(location);
  const { geometry = {} } = transformedLocation.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};

export const locationRequest = async (searchQuery) => {
  const location = locations[searchQuery];
  if (!location) {
    throw new Error("no location found");
  }
  return transformLocation(location);
};
