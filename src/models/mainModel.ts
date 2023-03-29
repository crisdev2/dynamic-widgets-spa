import { IWidget } from './widgetsModel'

export interface IImage {
  src: string
  title?: string
  alt?: string
}

export interface ILanguage {
  title: string
  code: string
}

export interface IHeader {
  logo: IImage
  languages: ILanguage[]
}

export interface IBreadcrumb {
  title: string
  path: string
  enabled: boolean
}

export interface IMenu {
  title: string
  path?: string | null
  icon?: string | null
  active: boolean
  child?: IMenu[]
}

export interface ISidemenu {
  logo: IImage,
  items: IMenu[]
}

export interface IRender {
  pageTitle?: string
  header?: IHeader
  breadcrumb?: IBreadcrumb[]
  sidemenu?: ISidemenu
  widgets?: IWidget[]
}

export interface IBackendAPI {
  message: string
  code: number
  render: IRender
}