import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { IBackendAPI, IRender } from '../models/mainModel'

const MainContext = createContext<IMainContext | undefined>(undefined)

interface IMainContext extends IRender {
  loaded: boolean
}

interface IProps {
  children?: ReactNode
}

const initialState = {
  data: {
    render: {
      pageTitle: '',
      header: undefined,
      breadcrumb: undefined,
      sidemenu: undefined,
      widgets: undefined,
    },
  },
  loaded: false,
}

export const MainProvider: FC<IProps> = ({ children }) => {
  const params = useParams()
  const path = params['*'] || 'dashboard'
  const { loaded, error, ...fetch } = useFetch(path)
  const data: IBackendAPI = fetch.data
  const [render, setRender] = useState<IRender>(initialState.data.render)
  useEffect(() => {
    if (loaded) {
      setRender({
        ...render,
        ...data?.render,
        breadcrumb: data?.render.breadcrumb,
        widgets: data?.render.widgets,
        pageTitle: data?.render.pageTitle,
      })
    }
  }, [loaded])

  return (
    <MainContext.Provider
      value={{
        ...render,
        loaded,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => {
  const context = useContext(MainContext)
  if (context === undefined) {
    throw new Error('useMainContext must be used within a MainProvider')
  }
  return context
}
