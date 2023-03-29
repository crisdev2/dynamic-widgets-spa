import styled from '@emotion/styled'
import { Grid, List, ListSubheader, Skeleton } from '@mui/material'
import React, { FC } from 'react'
import { useMainContext } from '../../context/mainContext'
import theme from '../../utilities/theme'
import SidebarItem from './SidebarItem'
import SimpleBar from 'simplebar-react';
import { Box, margin } from '@mui/system'
import 'simplebar-react/dist/simplebar.min.css';

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
              <Box component={!condensed ? MenuWrapper : 'div'}>
                {sidemenu.items.map((item, index) => (
                  <List
                    key={index}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={!condensed &&
                      <ListSubheader component="div" disableSticky>
                        {item.title}
                      </ListSubheader>
                    }
                    sx={condensed ? {pt: 0, pb: 0} : undefined}
                  >
                    {item.child?.map((subitem, subindex) => (
                      <SidebarItem item={subitem} key={subindex} condensed={condensed} level={1} />
                    ))}
                  </List>
                ))}
              </Box>
            </>
          }
        </>
        :
        <>
          <Skeleton variant="rectangular" width={"50%"} height={26} sx={{ margin: 'auto', mt: -12 }} />
          <Box sx={{ maxWidth: '80%', margin: 'auto', mt: 7 }}>
            {[...Array(3)].map((x, xIndex) => (
              <React.Fragment key={xIndex}>
                <Skeleton variant="rounded" width={"50%"} height={20} sx={{ mb: 4 }} />
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[...Array(4)].map((y, yIndex) => (
                    <React.Fragment key={yIndex}>
                      {!condensed &&
                        <Grid item xs={2}>
                          <Skeleton variant="rounded" height={20} />
                        </Grid>
                      }
                      <Grid item xs={10}>
                        <Skeleton variant="rounded" height={20} />
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          </Box>
        </>
      }
    </StyledSidebar>
  )
}

interface ISidebar {
  condensed: boolean
}

export default Sidebar