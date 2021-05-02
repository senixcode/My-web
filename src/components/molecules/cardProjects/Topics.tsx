import styled,{css} from 'styled-components'
import { FC } from "react";
import { Topic } from '../Topic';
import { ITopic } from '../../../interface/Topic';

export const Topics: FC<{ topics: Array<ITopic> }> = ({ topics }) => (
  <Flex >
    {topics.map((topic,index) => (
      <div key={index} >
        <Topic name={topic.name} />
      </div>
    ))}
  </Flex>
);

export const Flex = styled.div`
display: flex;
flex-wrap:wrap;
width:100%;
max-height:100%;
margin-bottom:6px;
/* justify-items:start;
align-items:start; */

  
`