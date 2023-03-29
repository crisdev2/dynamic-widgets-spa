import styled from '@emotion/styled'
import { Breadcrumbs, Skeleton } from '@mui/material'
import { useMainContext } from '../../context/mainContext'
import theme from '../../utilities/theme'
import Icon from '../shared/Icon'
import Link from '../shared/Link'

const StyledBreadcrumb = styled(Breadcrumbs)`
`

const StyledIcon = styled(Icon)`
  color: ${theme.breadcrumb.icon};
`

const Item = styled.span`
  color: ${theme.breadcrumb.item};
`

const Breadcrumb = () => {
  const { breadcrumb, loaded } = useMainContext()
  return (
    loaded ?
    <>
      {!!breadcrumb?.length ?
        <StyledBreadcrumb separator={<StyledIcon fontSize="small">navigate_next</StyledIcon>} aria-label="breadcrumb">
          {breadcrumb.map((item, index) => (
            item.enabled ?
              <Link underline="none" href={item.path} key={index}>{item.title}</Link>
              :
              <Item key={index}>{item.title}</Item>
          ))}
        </StyledBreadcrumb>
      : null}
    </>
    :
    <Skeleton variant="rounded" width={250} height={24} />
  )
}

export default Breadcrumb