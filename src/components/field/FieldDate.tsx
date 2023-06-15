import { FormControl, FormHelperText, Grid, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { IFieldDate } from '../../models/fieldsModel'
import { useFormikContext } from 'formik'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

const FieldDate: FC<IProps> = ({ field }) => {
  const formik = useFormikContext<any>()

  const defaultValue = dayjs(field.fieldDefaultValue);

  useEffect(() => {
    formik.setFieldValue(field.fieldId, defaultValue)
  }, [])

  return (
    <Grid item sm={4}>
      <FormControl fullWidth>
        <DatePicker
          label={field.fieldLabel}
          onChange={formik.handleChange}
          defaultValue={defaultValue}
          slotProps={{
            textField: {
              id: field.fieldId,
              name: field.fieldId,
              error: formik.touched[field.fieldId] && Boolean(formik.errors[field.fieldId]),
              helperText: formik.touched[field.fieldId] && formik.errors[field.fieldId] as string,
              value: formik.values[field.fieldId],
            },
          }}
        />
      </FormControl>
    </Grid>
  )
}

interface IProps {
  field: IFieldDate
}

export default FieldDate
