import styled from "styled-components"
import { Flex } from "@rebass/grid"

export const FormContainer = styled(Flex)`
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
`;

export const Button = styled.button`
  font-family: ${({theme}) => theme.fonts.primary.family};
  font-weight: ${({theme}) => theme.fonts.primary.weight};
`;
