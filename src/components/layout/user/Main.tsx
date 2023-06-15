import styled from '@emotion/styled'
import theme from '../../../utilities/theme'
import Navbar from './Navbar'
import Container from './Container'
import { useUserLayoutContext } from '../../../context/userLayoutContext'

const StyledMain = styled.div`
  background: ${theme.bg.body};
  margin-left: 260px;
  overflow: hidden;
  padding: 70px 12px 65px;
  min-height: 100vh;
  box-sizing: border-box;
  transition: all 0.2s;
  &[data-condensed] {
    margin-left: 70px;
  }
`

const Main = () => {
  const { condensed } = useUserLayoutContext()
  return (
    <StyledMain data-condensed={condensed}>
      <Navbar />
      <Container />
    </StyledMain>
  )
}

export default Main