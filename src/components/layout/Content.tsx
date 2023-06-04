import { useMainContext } from '../../context/mainContext'
import Widget from '../widget/Widget'
import { Skeleton } from 'antd'

const Content = () => {
  const { widgets, loaded } = useMainContext()
  return loaded ? <Widget widgets={widgets} /> : <Skeleton active />
}

export default Content
