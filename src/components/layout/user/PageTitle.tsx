import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import { useMainContext } from '../../../context/mainContext'
import theme from '../../../utilities/theme'

const StyledPageTitle = styled(Typography)`
  color: ${props => theme(props.theme.palette?.mode === 'dark').color.pageTitle};
`

const PageTitle = () => {
  const { pageTitle, loaded } = useMainContext()
  return loaded ? (
    <StyledPageTitle variant="h4">{pageTitle}</StyledPageTitle>
  ) : (
    <Skeleton variant="rounded" width={250} height={24} />
  )
}

export default PageTitle