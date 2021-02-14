import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { PropStyleTheme } from "../../types";
type Props = {
  icon:string;
  name: string;
};
export const GroupSkill: FC<Props> = ({ icon, name }) => (
  <Group>
    <Icon>
      <Center>
       <img src={icon} />
      </Center>
    </Icon>
    <Name>{name}</Name>
  </Group>
);

const Group = styled.div`
  display: grid;
  grid-template-columns: 5fr 10fr;
  width: 100%;
  grid-gap: 1em;
  align-items: center;
  justify-content: center;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
`;
const Icon = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-end;
`;
const Name = styled.h3`
  display: flex;
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  font-size: ${(props: PropStyleTheme) => props.theme.fontSizes.larger};
  font-weight: 350;
`;
const Center = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;
