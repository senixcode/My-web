import { FC } from 'react'
import styled from 'styled-components'
import { ISkill } from '../../interface/Skill'
import {GroupSkill} from '../molecules/GroupSkill'
type Props = {
    skills:Array<ISkill>
}
export const ContainerSkill:FC<Props> = ({skills}) => (
    <Container>
        {
            skills.map(({icon, name},index) => (
                <GroupSkill key={index} icon={icon} name={name}/>
            ))
        }
    </Container>
)
    const Container = styled.div`
        display:flex;
        flex-direction:column;
        padding:1em;
        align-items:center;
        justify-content:center;
    `