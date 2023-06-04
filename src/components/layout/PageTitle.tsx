import styled from '@emotion/styled'
import { useMainContext } from '../../context/mainContext'
import theme from '../../utilities/theme'
import { Skeleton, Typography } from 'antd'

const StyledPageTitle = styled(Typography.Title)`
  color: ${theme.color.pageTitle};
`

const SkelentonWrapper = styled.div`
  width: 250px;
  max-width: 50%;
`

const PageTitle = () => {
  const { pageTitle, loaded } = useMainContext()
  return loaded ? (
    <StyledPageTitle level={4}>{pageTitle}</StyledPageTitle>
  ) : (
    <SkelentonWrapper>
      <Skeleton.Input block active size="small" />
    </SkelentonWrapper>
  )
}

export default PageTitle
