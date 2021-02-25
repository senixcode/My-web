import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";

export const Topic: FC<{ name: string }> = ({ name }) => (
  <Container styles={topic}>
    {name}
  </Container>
);
const topic = css`
  padding: 0.3em;
  border-radius: 12px;
  border: 2px solid
    ${(props: PropStyleTheme) => props.theme.colors.secondaryVariant};
  font-size: 16px;
  font-weight: 300;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`;
