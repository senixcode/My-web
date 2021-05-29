import { memo, FC } from "react"
import styled from "styled-components"
import { List, Topics as EnumTopics } from "../../../hook/language/types"
import { Topic } from "../Topic"

const Topics: FC<{ topics: List<string>; objectKeys?: boolean }> = ({
  topics,
  objectKeys = false,
}) => {
  return (
    <div>
      <Flex>
        {topics.length > 0 &&
          topics.map((topic, index) => (
            <div key={index}>
              <Topic name={objectKeys ? EnumTopics[topic] : topic} />
            </div>
          ))}
      </Flex>
    </div>
  )
}

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 100%;
  margin-bottom: 6px;
`
export default memo(Topics)
