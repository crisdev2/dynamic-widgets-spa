import { FieldSelectValidations } from '../components/field/FieldSelect'
import { IField } from '../models/widgetsModel'
import * as yup from 'yup'

export const getValidationSchema = (fields: IField[] | undefined) => {
  const object: yup.AnyObject = {}
  fields?.forEach((field) => {
    if (field.fieldType === 'select') {
      object[field.fieldId] = FieldSelectValidations(field)
    }
  })
  return object
}
