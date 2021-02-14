import { FC } from "react";
import { separateCamelCase } from "../../helper/separateCamelCase";
import { useScrollSections } from "../../scroll-section";
import { Header } from "./Header";
import styled from 'styled-components'
import { PropStyleTheme } from "../../types";
type Props = {
  changeShowNavxs: () => void;
};
export const DynamicMenu: FC<Props> = ({ changeShowNavxs }) => {
  const sections = useScrollSections();
  return (
    <>
      {sections.map(({ id: section, selected }) => {
        if (selected == true) {
          return (
            <FixedTop key={section}>
              <Header
                title={separateCamelCase(section)}
                changeShowNavxs={changeShowNavxs}
              />
            </FixedTop>
          );
        }
      })}
    </>
  );
};

const FixedTop = styled.div`
  position: fixed;
  width: calc(100vw - ${({ theme }: PropStyleTheme) => theme.sizes.xs});
  top: 1.4em;
  padding: 0 18px;
`;