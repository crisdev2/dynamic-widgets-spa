import { Grid, Skeleton } from '@mui/material'

const ContentSkeleton = () => {
  return (
    <Grid container spacing={8}>
      {[...Array(6)].map((item, index) => (
        <Grid item key={index} md={4}>
          <Skeleton
            variant="rounded"
            width="100%"
            height="200px"
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ContentSkeleton
