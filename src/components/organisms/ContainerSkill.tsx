import styled from 'styled-components'
import {GroupSkill} from '../molecules/GroupSkill'
import { GraphqlIcon, ReactIcon, TsIcon, VueIcon,JwtIcon, MongodbIcon, DockerIcon, NodeIcon } from '../../image/skills'
const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:1em;
    align-items:center;
    justify-content:center;
`
export const ContainerSkill = () => (
    <Container>
        <GroupSkill  children={<TsIcon/>} name="Typescript"/>
        <GroupSkill  children={<ReactIcon/>} name="React js"/>
        <GroupSkill  children={<VueIcon/>} name="Vue js"/>
        <GroupSkill  children={<NodeIcon/>} name="Node js"/>
        <GroupSkill  children={<GraphqlIcon/>} name="Graphql"/>
        <GroupSkill  children={<JwtIcon/>} name="Jwt"/>
        <GroupSkill  children={<MongodbIcon/>} name="Mongodb"/>
        <GroupSkill  children={<DockerIcon/>} name="Docker"/>
    </Container>
)