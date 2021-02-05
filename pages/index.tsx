
import styled from "styled-components";
import BasicLayout from "../src/layout";

const Title = styled.h1`
  color: white;
`;

const Home = () => {
  return (
    <BasicLayout>
      <Title>Title</Title>
    </BasicLayout>
  );
};

export default Home;