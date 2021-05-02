import styled, { css } from "styled-components";
import { FC } from "react";
import { Container } from "../../../styles/system/Container";
import { PropStyleTheme } from "../../types";

export const Topic: FC<{ name: string }> = ({ name }) => (
  <Container styles={topic}>
    {name}
  </Container>
);
export const topic = css`
  padding: 0.2em;
  margin:0.2em;
  border-radius: 6px;
  border: 2px solid
    ${(props: PropStyleTheme) => props.theme.colors.secondaryVariant};
  font-size: 14px;
  font-weight: 300;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`;
