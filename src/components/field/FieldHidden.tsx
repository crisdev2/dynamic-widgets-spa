import { Box, FormControl, TextField } from '@mui/material'
import { FC } from 'react'
import { IFieldHidden } from '../../models/fieldsModel'
import { useFormikContext } from 'formik'

const FieldHidden: FC<IProps> = ({ field }) => {
  const formik = useFormikContext<any>()
  return (
    <Box sx={{ display: 'none' }}>
      <FormControl>
        <TextField
          fullWidth
          id={field.fieldId}
          name={field.fieldId}
          value={field.fieldDefaultValue}
          onChange={formik.handleChange}
          type="hidden"
        />
      </FormControl>
    </Box>
  )
}

interface IProps {
  field: IFieldHidden
}

export default FieldHidden
