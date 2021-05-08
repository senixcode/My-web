import { css } from "styled-components"
import { Container } from "../../../../styles/system/Container"
import { Flex } from "../cardProjects/Topics"
import { BarLinearLoading } from "./SkeletonLoaderCard"
export const SkeletonLoaderTopic = () => (
  <Flex>
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <Container key={item} styles={topic}>
        <BarLinearLoading width="5em" height="1.5em" />
      </Container>
    ))}
  </Flex>
)

export const topic = css`
  padding: 0.1em;
`
