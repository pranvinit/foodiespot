import styled from "styled-components/native";

const defaultStyle = (theme) => `
    color: ${theme.colors.text.primary};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 0;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body}
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption}
    font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;
const hint = (theme) => `
    font-size: ${theme.fontSizes.body}
`;

const textVariant = {
  body,
  label,
  caption,
  error,
  hint,
};

export const CustomText = styled.Text`
  ${({ theme }) => defaultStyle(theme)};
  ${({ variant, theme }) => textVariant[variant](theme)};
`;

CustomText.defaultProps = {
  variant: "body",
};
