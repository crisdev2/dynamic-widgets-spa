import React, { FC } from 'react'
import { IField } from '../../models/widgetsModel'
import FieldText from './FieldText'
import FieldHidden from './FieldHidden'
import FieldDate from './FieldDate'
import { Grid } from '@mui/material'
import styled from '@emotion/styled'
import FieldSelect from './FieldSelect'

const StyledField = styled.div`
  margin-bottom: 20px;
`

const Field: FC<IProps> = ({ fields }) => {
  return (
    <StyledField>
      <Grid container spacing={4}>
        {fields?.map((field, index) => (
          <React.Fragment key={index}>
            {field.fieldType === 'date' &&
              <FieldDate field={field} />
            }
            {field.fieldType === 'hidden' &&
              <FieldHidden field={field} />
            }
            {field.fieldType === 'select' &&
              <FieldSelect field={field} />
            }
            {field.fieldType === 'text' &&
              <FieldText field={field} />
            }
          </React.Fragment>
        ))}
      </Grid>
    </StyledField>
  )
}

interface IProps {
  fields?: IField[]
}

export default Field