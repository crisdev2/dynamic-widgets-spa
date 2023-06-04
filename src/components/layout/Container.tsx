import styled from '@emotion/styled'
import { useMainContext } from '../../context/mainContext'
import Breadcrumb from './Breadcrumb'
import Content from './Content'
import PageTitle from './PageTitle'

const StyledContainer = styled.div`
`

const PageTitleBox = styled.div`
  display: flex;
  height: 75px;
  align-items: center;
  justify-content: space-between;
`

const Container = () => {
  const { pageTitle } = useMainContext()
  return (
    <StyledContainer>
      <PageTitleBox>
        <PageTitle />
        <Breadcrumb />
      </PageTitleBox>
      <Content />
    </StyledContainer>
  )
}

export default Container