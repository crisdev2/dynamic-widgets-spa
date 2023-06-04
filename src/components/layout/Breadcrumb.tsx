import styled from '@emotion/styled'
import { useMainContext } from '../../context/mainContext'
import theme from '../../utilities/theme'
import Icon from '../shared/Icon'
import Link from '../shared/Link'
import { Breadcrumb as AntdBreadcrumb, Skeleton } from 'antd'

const StyledIcon = styled(Icon)`
  color: ${theme.breadcrumb.icon};
`

const Item = styled.span`
  color: ${theme.breadcrumb.item};
`

const SkelentonWrapper = styled.div`
  width: 250px;
  max-width: 50%;
`

const Breadcrumb = () => {
  const { breadcrumb, loaded } = useMainContext()

  const items = breadcrumb?.map((item) => ({
    path: item.enabled ? item.path : undefined,
    title: item.title,
  }))

  return loaded ? (
    <>
      <AntdBreadcrumb
        items={items}
        separator={<StyledIcon fontSize="small">navigate_next</StyledIcon>}
        itemRender={(route) => {
          if (!route.path) return <Item>{route.title}</Item>
          else
            return (
              <Link underline="none" href={route.path}>
                {route.title}
              </Link>
            )
        }}
      />
    </>
  ) : (
    <SkelentonWrapper>
      <Skeleton.Input
        block
        active
        size="small"
      />
    </SkelentonWrapper>
  )
}

export default Breadcrumb
