import styled from '@emotion/styled'
import { FC } from 'react'
import { useMainContext } from '../../context/mainContext'
import theme from '../../utilities/theme'
import SidebarItem from './SidebarItem'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Skeleton, Space, Typography } from 'antd'

const StyledSidebar = styled.div`
  width: 260px;
  z-index: 10;
  background: ${theme.bg.sidebar};
  color: ${theme.menu.item};
  bottom: 0;
  position: fixed;
  top: 0;
  padding-top: 70px;
  transition: all 0.2s;
  &[data-condensed] {
    position: absolute;
    width: 70px;
    z-index: 5;
    padding-top: 70px;
  }
`

const LogoWrapper = styled.div`
  background: ${theme.bg.sidebar};
  width: 260px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  transition: all 0.2s;
  &[data-condensed] {
    width: 70px;
    z-index: 1;
  }
`

const SkeletonWrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: -12px;
`

const List = styled.nav`
`

const MenuWrapper = styled.div`
max-height: 100%;
`

const Sidebar: FC<ISidebar> = ({ condensed }) => {
  const { sidemenu, loaded } = useMainContext()

  return (
    <StyledSidebar data-condensed={condensed ? "": undefined}>
      {(loaded || !!sidemenu) ?
        <>
          {sidemenu &&
            <>
              <LogoWrapper data-condensed={condensed ? "": undefined}>
                <img src={sidemenu.logo.src} alt={sidemenu.logo.alt} title={sidemenu.logo.title} height={!condensed ? "26" : "16"} />
              </LogoWrapper>
              <MenuWrapper as={!condensed ? SimpleBar : undefined}>
                {sidemenu.items.map((item, index) => (
                  <List
                    key={index}
                    aria-labelledby="nested-list-subheader"
                  >
                    {!condensed && 
                      <Typography.Title level={5}>
                        {item.title}
                      </Typography.Title>
                    }
                    {item.child?.map((subitem, subindex) => (
                      <SidebarItem item={subitem} key={subindex} condensed={condensed} level={1} />
                    ))}
                  </List>
                ))}
              </MenuWrapper>
            </>
          }
        </>
        :
        <SkeletonWrapper>
          <Skeleton active />
        </SkeletonWrapper>
      }
    </StyledSidebar>
  )
}

interface ISidebar {
  condensed: boolean
}

export default Sidebar