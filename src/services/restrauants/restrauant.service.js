import { mocks, mockImages } from "./mock";
import camelize from "camelize";

const transformRestrauants = ({ results } = []) => {
  const transformedRestraunts = results.map((restrauant) => ({
    ...restrauant,
    isOpen: restrauant.opening_hours?.open_now,
    isClosedTemporarily: restrauant.business_status === "CLOSED_TEMPORARILY",
    address: restrauant.vicinity,
    photos: mockImages.map(
      (image) => mockImages[Math.floor(Math.random() * mockImages.length)]
    ),
  }));
  const result = camelize(transformedRestraunts);
  return result;
};

export const restrauantsRequest = async (location) => {
  const restrauants = mocks[location];
  if (!restrauants) {
    throw new Error("not found");
  }
  return transformRestrauants(restrauants);
};
