import { IFieldDate, IFieldHidden, IFieldSelect, IFieldSwitch, IFieldText } from './fieldsModel'

export type IWidget = (
  | IWidgetStepper
  | IWigetAlert
  | IWidgetForm
)

export type IField = (
  | IFieldDate
  | IFieldHidden
  | IFieldSelect
  | IFieldSwitch
  | IFieldText
)

export interface IWidgetStepper {
  widgetType: "stepper"
  widgetOptions?: null
  widgetItems: {
    itemTitle: string
    itemEnabled: boolean
    itemCompleted: boolean
    itemWidgets: IWidget[]
  }[]
}

export interface IWidgetForm {
  widgetType: "form"
  widgetOptions?: {
    fields: IField[]
  }
  widgetItems: {
    itemType: string
    itemId: string
    itemLabel: string
    itemRequired?: boolean
    itemEnabled?: boolean
    itemMaxLength?: number
    itemDefaultValue?: string | number | boolean | null
    itemOptions?: {
      [key: string]: string
    }
    itemWidgets?: IWidget[]
  }[]
}

export interface IWigetAlert {
  widgetType: "alert"
  widgetOptions: {
    type: "error" | "warning" | "info" | "success"
    title: string | null
    icon: boolean
  },
  widgetItems: string[]
}