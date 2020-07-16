import styled from "styled-components"
// import { Flex } from "@rebass/grid"

// TODO: Create a styled component for input
export const Input = styled.input`
  font-family: ${({theme}) => theme.fonts.primary.family};
  font-weight: ${({theme}) => theme.fonts.primary.weight};
`;

export const Label = styled.label`
  font-weight: bold;
`;
