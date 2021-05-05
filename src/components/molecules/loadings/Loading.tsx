import styled, { keyframes } from "styled-components"
import { PropStyleTheme } from "../../../types"
export default function Loading() {
  return (
    <Container>
      <LoaderAnimation>
        <Point />
        <Point />
        <Point />
      </LoaderAnimation>
    </Container>
  )
}

const loaderAnimation = keyframes`
   to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
`
const Container = styled.div`
  height: 100vh;
  display: flex;
`
const LoaderAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  & > div {
    width: 1.5em;
    height: 1.5em;
    margin: 3rem 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }: PropStyleTheme) =>
      theme.colors.textPrimary};
    animation: ${loaderAnimation} 0.6s infinite alternate;
  }
  & > div:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`
const Point = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
`
