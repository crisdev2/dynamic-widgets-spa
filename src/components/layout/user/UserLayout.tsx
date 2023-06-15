import styled from '@emotion/styled'
import { useState } from 'react'
import theme from '../../../utilities/theme'
import Container from './Container'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { UserLayoutProvider } from '../../../context/userLayoutContext'
import Main from './Main'

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  width: 100%;
  position: relative;
`

const UserLayout = () => {
  return (
    <UserLayoutProvider>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </UserLayoutProvider>
  )
}

export default UserLayout
