import styled, { css } from "styled-components"
import { Container } from "../../../styles/system/Container"
import { startContent, startItems } from "../../../styles/system/styles"
import { useMultiLanguage,TypeReducerMultiLanguage } from "../../hook/useMultiLanguage"
import { PropStyleTheme } from "../../types"
import TopicsFlex  from "../molecules/cardProjects/Topics"
import { Topics as EnumTopics} from "../../hook/language/types"
import { memo  } from "react"
const Topics = () => {
  const {topicTitle} = useMultiLanguage(TypeReducerMultiLanguage.TOPIC_TITLE);

  return (
    <Container gridTemplateRowsMd={"1fr 12fr"} styles={container}>
      <Title>{topicTitle}</Title>
      <TopicsFlex topics={Object.keys(EnumTopics)} objectKeys={true}/>
    </Container>
  )
}
export default memo(Topics)
const container = css`
  background-color: ${(props: PropStyleTheme) =>
    props.theme.colors.primaryVariant};
  width: 100%;
  padding: 0.5em;
  ${startContent}
  ${startItems}
  border-radius:12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: -webkit-sticky;
  position: sticky;
  top: 4em;

  @media screen and (max-width: ${(props: PropStyleTheme) =>
      props.theme.screen.md}) {
    display: none;
  }
`
const Title = styled.h3`
  color: ${(props: PropStyleTheme) => props.theme.colors.textPrimary};
  font-size: 18px;
  font-weight: normal;
`
