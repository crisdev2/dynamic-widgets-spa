import { FC } from 'react'
import styled from '@emotion/styled'
import { List, ListSubheader } from '@mui/material'
import { useMainContext } from '../../../context/mainContext'
import theme from '../../../utilities/theme'
import SidebarItem from './SidebarItem'
import SimpleBar from 'simplebar-react'
import { Box } from '@mui/system'
import { useUserLayoutContext } from '../../../context/userLayoutContext'
import SidebarSkeleton from './SidebarSkeleton'
import 'simplebar-react/dist/simplebar.min.css'

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

const MenuWrapper = styled(SimpleBar)`
  max-height: 100%;
`

const Sidebar: FC = () => {
  const { sidemenu, loaded } = useMainContext()
  const { condensed } = useUserLayoutContext()
  return (
    <StyledSidebar data-condensed={condensed}>
      {loaded || sidemenu ? (
        <>
          {sidemenu && (
            <>
              <LogoWrapper data-condensed={condensed}>
                <img
                  src={sidemenu.logo.src}
                  alt={sidemenu.logo.alt}
                  title={sidemenu.logo.title}
                  height={!condensed ? '26' : '16'}
                />
              </LogoWrapper>
              <Box component={!condensed ? MenuWrapper : 'div'}>
                {sidemenu.items.map((item, index) => (
                  <List
                    key={index}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      !condensed && (
                        <ListSubheader component="div" disableSticky>
                          {item.title}
                        </ListSubheader>
                      )
                    }
                    sx={condensed ? { pt: 0, pb: 0 } : undefined}
                  >
                    {item.child?.map((subitem, subindex) => (
                      <SidebarItem
                        item={subitem}
                        key={subindex}
                        level={1}
                      />
                    ))}
                  </List>
                ))}
              </Box>
            </>
          )}
        </>
      ) : (
        <SidebarSkeleton />
      )}
    </StyledSidebar>
  )
}

export default Sidebar
