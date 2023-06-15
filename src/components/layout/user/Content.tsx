import styled from '@emotion/styled'
import { useMainContext } from '../../../context/mainContext'
import Widget from '../../widget/Widget'
import ContentSkeleton from './ContentSkeleton'

const StyledContent = styled.div``

const Content = () => {
  const { widgets, loaded } = useMainContext()
  return (
    <StyledContent>
      {loaded ? (
        <Widget widgets={widgets} />
      ) : (
        <ContentSkeleton />
      )}
    </StyledContent>
  )
}

export default Content
