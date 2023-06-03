import { FormControl, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { IFieldText } from '../../models/fieldsModel'
import { useFormikContext } from 'formik'

const FieldText: FC<IProps> = ({ field }) => {
  const formik = useFormikContext<any>();

  useEffect(() => {
    formik.setFieldValue(field.fieldId, field.fieldDefaultValue)
  }, [])

  return (
    <FormControl>
      <TextField
        fullWidth
        id={field.fieldId}
        name={field.fieldId}
        label={field.fieldLabel}
        defaultValue={field.fieldDefaultValue}
        onChange={formik.handleChange}
        error={formik.touched[field.fieldId] && Boolean(formik.errors[field.fieldId])}
        helperText={formik.touched[field.fieldId] && formik.errors[field.fieldId] as string}
      />
    </FormControl>
  )
}

interface IProps {
  field: IFieldText
}

export default FieldText
