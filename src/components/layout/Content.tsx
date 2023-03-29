import styled from '@emotion/styled'
import { Grid, Skeleton } from '@mui/material'
import { useMainContext } from '../../context/mainContext'
import Widgets from '../widgets'

const StyledContent = styled.div`
`

const Content = () => {
  const { widgets, loaded } = useMainContext()
  return (
    <StyledContent>
      {
        loaded ? 
        <>
          <Widgets widgets={widgets} />
        </>
        :
        <>
          <Grid container spacing={8}>
            {[...Array(6)].map((item, index) => (
              <Grid item key={index} md={4}>
                <Skeleton variant="rounded" width="100%" height="200px">
                </Skeleton>
              </Grid>
            ))}
          </Grid>
        </>
      }
    </StyledContent>
  )
}

export default Content