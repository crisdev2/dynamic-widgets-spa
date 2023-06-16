import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { IFieldSelect } from '../../models/fieldsModel'
import { useFormikContext } from 'formik'
import * as yup from 'yup'

const FieldSelect: FC<IProps> = ({ field }) => {
  const formik = useFormikContext<any>();

  const handleChange = (event: SelectChangeEvent) => {
    formik.setFieldValue(field.fieldId, event.target.value)
  }

  const fieldMeta = formik.getFieldMeta<string>(field.fieldId)

  useEffect(() => {
    formik.setFieldValue(field.fieldId, field.fieldDefaultValue)
  }, [])

  return (
    <Grid item sm={4}>
      <FormControl fullWidth>
        <InputLabel id={`${field.fieldId}-label`}>{field.fieldLabel}</InputLabel>
        <Select
          labelId={`${field.fieldId}-label`}
          id={field.fieldId}
          value={fieldMeta.value || field.fieldDefaultValue}
          label={field.fieldLabel}
          onChange={handleChange}
          error={formik.touched[field.fieldId] && Boolean(formik.errors[field.fieldId])}
        >
          {field.fieldOptions.map(option => (
            <MenuItem value={option.id} key={option.id}>{option.label}</MenuItem>
          ))}
        </Select>
        {formik.touched[field.fieldId] && !!formik.errors[field.fieldId] &&
          <FormHelperText error>{formik.errors[field.fieldId] as string}</FormHelperText>
        }
      </FormControl>
    </Grid>
  )
}

export const FieldSelectValidations = (field: IFieldSelect) => {
  let validation = yup.string()
  if (field.fieldRequired) {
    validation = validation.required('This field is required')
  }
  return validation
}

interface IProps {
  field: IFieldSelect
}

export default FieldSelect
