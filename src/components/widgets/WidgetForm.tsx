import styled from '@emotion/styled'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FC } from 'react'
import { IWidgetForm as IWidgetModel } from '../../models/widgetsModel'
import { Button, FormControl, TextField } from '@mui/material'

const StyledWidgetForm = styled.div`
`

const StyledForm = styled.form`
`

const WidgetForm: FC<IWidgetForm> = ({ widget }) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledWidgetForm>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FormControl>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FormControl>
        <FormControl>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </StyledForm>
    </StyledWidgetForm>
  )
}

interface IWidgetForm {
  widget: IWidgetModel
}

export default WidgetForm