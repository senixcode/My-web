import { FC } from "react";
import styled from "styled-components";
import { Gallery } from "../Gallery";
import { Item } from "../types";

const Container = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

 const ContainerGallery:FC<{items: Array<Item>}> = ({items}) => {

  return (
    <Container>
      <Gallery items={items} />
    </Container>
  );
}
export default ContainerGallery
