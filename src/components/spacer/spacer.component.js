import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xlarge: 4,
};

const positionVariant = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

// creates dynamic spacer component
const getSpacerVariant = (position, size, theme) => {
  const sizeValue = theme.space[sizeVariant[size]];
  return `${positionVariant[position]}: ${sizeValue}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getSpacerVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
