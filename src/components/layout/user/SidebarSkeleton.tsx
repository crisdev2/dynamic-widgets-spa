import { Grid, Skeleton } from '@mui/material'
import React, { FC } from 'react'
import { Box } from '@mui/system'
import { useUserLayoutContext } from '../../../context/userLayoutContext'

const SidebarSkeleton: FC = () => {
  const { condensed } = useUserLayoutContext()
  return (
    <>
      <Skeleton
        variant="rectangular"
        width='50%'
        height={26}
        sx={{ margin: 'auto', mt: -12 }}
      />
      <Box sx={{ maxWidth: '80%', margin: 'auto', mt: 7 }}>
        {[...Array(3)].map((x, xIndex) => (
          <React.Fragment key={xIndex}>
            <Skeleton
              variant="rounded"
              width='50%'
              height={20}
              sx={{ mb: 4 }}
            />
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {[...Array(4)].map((y, yIndex) => (
                <React.Fragment key={yIndex}>
                  {!condensed && (
                    <Grid item xs={2}>
                      <Skeleton variant="rounded" height={20} />
                    </Grid>
                  )}
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
  )
}

export default SidebarSkeleton
