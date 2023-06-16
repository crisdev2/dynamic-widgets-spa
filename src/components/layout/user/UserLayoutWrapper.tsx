import styled from '@emotion/styled'
import Sidebar from './Sidebar'
import Main from './Main'
import { useMemo } from 'react'
import { customTheme } from '../../../utilities/theme'
import { useUserLayoutContext } from '../../../context/userLayoutContext'
import { ThemeProvider } from '@mui/material'

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const UserLayoutWrapper = () => {
  const { darkMode } = useUserLayoutContext()
  const theme = useMemo(() => customTheme(darkMode === 'On'), [darkMode])

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </ThemeProvider>
  )
}

export default UserLayoutWrapper
