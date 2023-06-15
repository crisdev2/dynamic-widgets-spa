import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { IFieldSelect } from '../../models/fieldsModel'
import { useFormikContext } from 'formik'

const FieldSelect: FC<IProps> = ({ field }) => {
  const formik = useFormikContext<any>();

  useEffect(() => {
    formik.setFieldValue(field.fieldId, field.fieldDefaultValue)
  }, [])

  return (
    <Grid item sm={4}>
      {/* <FormControl fullWidth>
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
      </FormControl> */}
      <FormControl fullWidth>
        <InputLabel id={`${field.fieldId}-label`}>{field.fieldLabel}</InputLabel>
        <Select
          labelId={`${field.fieldId}-label`}
          id={field.fieldId}
          value={field.fieldDefaultValue}
          label={field.fieldLabel}
          onChange={formik.handleChange}
        >
          {field.fieldOptions.map(option => (
            <MenuItem value={option.id} key={option.id}>{option.label}</MenuItem>
          ))}
        </Select>
        {/* TODO: Errors and helper text */}
      </FormControl>
    </Grid>
  )
}

interface IProps {
  field: IFieldSelect
}

export default FieldSelect
