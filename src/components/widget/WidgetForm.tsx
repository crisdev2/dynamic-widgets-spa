import styled from '@emotion/styled'
import { Form, Formik, FormikProvider, useFormik } from 'formik'
import * as yup from 'yup'
import { FC, Fragment } from 'react'
import { IWidgetForm as IWidgetModel } from '../../models/widgetsModel'
import { Button, FormControl, TextField } from '@mui/material'
import Field from '../field/Field'
import { getValidationSchema } from '../../utilities/field'

const StyledWidgetForm = styled.div`
`

const StyledForm = styled.form`
`

const WidgetForm: FC<IProps> = ({ widget }) => {
  const { widgetOptions } = widget

  const validationSchema = yup.object(getValidationSchema(widgetOptions?.fields));

  const formik = useFormik({
    initialValues: {},
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledWidgetForm>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FormikProvider value={formik}>
          <Field fields={widgetOptions?.fields} />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </FormikProvider>
      </StyledForm>
    </StyledWidgetForm>
  )
}

interface IProps {
  widget: IWidgetModel
}

export default WidgetForm