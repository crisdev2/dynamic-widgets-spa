import styled from '@emotion/styled'
import { Box, Button, FormLabel, Switch } from '@mui/material'
import { FC } from 'react'
import theme from '../../../utilities/theme'
import Icon from '../../shared/Icon'
import { useUserLayoutContext } from '../../../context/userLayoutContext'

const StyledNavbar = styled.div`
  background: ${theme.bg.content};
  position: fixed;
  top: 0;
  padding: 0 24px;
  min-height: 70px;
  left: 260px;
  right: 0;
  z-index: 1001;
  box-shadow: ${theme.darkMode ? 'none' : '0 0 35px 0 rgba(154,161,171,.15)'};
  box-shadow: ${theme.darkMode ? 'none' : '0px 0px 35px 0px rgba(154,161,171,0.15)'};
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  &[data-condensed] {
    left: 70px;
  }
`

const StyledButton = styled(Button)`
  color: ${theme.navbar.menu};
  height: 70px;
  line-height: 70px;
  width: 60px;
  font-size: 24px;
  margin-left: -24px;
  &:hover {
    background: transparent;
  }
`

const UserActions = styled(Box)`
  height: 70px;
  display: flex;
  align-items: center;
`

const Navbar: FC = () => {
  const { condensed, darkMode, toggleCondensed, toggleDarkMode } = useUserLayoutContext()
  return (
    <StyledNavbar data-condensed={condensed}>
      <StyledButton color="inherit" variant="text" onClick={toggleCondensed}>
        <Icon>menu</Icon>
      </StyledButton>
      <UserActions>
        <FormLabel>Dark Mode</FormLabel>
        <Switch checked={darkMode === 'On'} onChange={toggleDarkMode} />
      </UserActions>
    </StyledNavbar>
  )
}

export default Navbar