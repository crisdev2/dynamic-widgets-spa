interface IField {
  fieldId: string
  fieldType: string
}

export interface IFieldText extends IField {
  fieldDefaultValue?: string
  fieldEnabled?: boolean
  fieldLabel: string
  fieldMaxLength?: number
  fieldRequired?: boolean
  fieldType: "text"
}

export interface IFieldHidden extends IField {
  fieldDefaultValue?: string | number | boolean
  fieldType: "hidden"
}

export interface IFieldDate extends IField {
  fieldDefaultValue?: string
  fieldEnabled?: boolean
  fieldLabel: string
  fieldRequired?: boolean
  fieldType: "date"
}

export interface IFieldSwitch extends IField {
  fieldDefaultValue?: boolean | null
  fieldEnabled?: boolean
  fieldLabel: string
  fieldRequired?: boolean
  fieldType: "switch"
}
