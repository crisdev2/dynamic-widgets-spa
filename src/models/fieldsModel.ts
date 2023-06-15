interface IField {
  fieldId: string
  fieldType: string
}

export interface IFieldDate extends IField {
  fieldDefaultValue?: string
  fieldEnabled?: boolean
  fieldLabel: string
  fieldRequired?: boolean
  fieldType: "date"
}

export interface IFieldHidden extends IField {
  fieldDefaultValue?: string | number | boolean
  fieldType: "hidden"
}

export interface IFieldSelect extends IField {
  fieldDefaultValue?: string
  fieldEnabled?: boolean
  fieldLabel: string
  fieldOptions: {
    id: string | number
    label: string
  }[]
  fieldRequired?: boolean
  fieldType: "select"
}

export interface IFieldSwitch extends IField {
  fieldDefaultValue?: boolean | null
  fieldEnabled?: boolean
  fieldLabel: string
  fieldRequired?: boolean
  fieldType: "switch"
}

export interface IFieldText extends IField {
  fieldDefaultValue?: string
  fieldEnabled?: boolean
  fieldLabel: string
  fieldMaxLength?: number
  fieldRequired?: boolean
  fieldType: "text"
}
