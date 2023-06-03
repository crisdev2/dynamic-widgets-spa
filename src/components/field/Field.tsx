import React, { FC } from 'react'
import { IField } from '../../models/widgetsModel'
import FieldText from './FieldText'
import FieldHidden from './FieldHidden'
import FieldDate from './FieldDate'

const Field: FC<IProps> = ({ fields }) => {
  return (
    <>
      {fields?.map((field, index) => (
        <React.Fragment key={index}>
          {field.fieldType === 'date' &&
            <FieldDate field={field} />
          }
          {field.fieldType === 'hidden' &&
            <FieldHidden field={field} />
          }
          {field.fieldType === 'text' &&
            <FieldText field={field} />
          }
        </React.Fragment>
      ))}
    </>
  )
}

interface IProps {
  fields?: IField[]
}

export default Field