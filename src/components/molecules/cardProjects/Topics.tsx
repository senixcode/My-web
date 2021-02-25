import styled,{css} from 'styled-components'
import { FC } from "react";
import { Container } from "../../../../styles/system/Container";
import { Topic } from '../Topic';

export const Topics: FC<{ topics: Array<string> }> = ({ topics }) => (
  <Flex >
    {topics.map((topic,index) => (
      <div key={index} >
        <Topic name={topic} />
      </div>
    ))}
  </Flex>
);

const Flex = styled.div`
display: flex;
flex-wrap:wrap;
width:100%;
height:100%;

/* justify-items:start;
align-items:start; */

  
`