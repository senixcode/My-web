import { FC } from "react";
import styled from "styled-components";
import { Gallery, PropsGallery } from "../Gallery";
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

 const ContainerGallery:FC<PropsGallery> = (props) => {

  return (
    <Container>
      <Gallery {...props} />
    </Container>
  );
}
export default ContainerGallery
