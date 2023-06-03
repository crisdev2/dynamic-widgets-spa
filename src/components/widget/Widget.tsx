import React, { FC } from 'react'
import { IWidget } from '../../models/widgetsModel'
import WidgetForm from './WidgetForm'
import WidgetStepper from './WidgetStepper'

const Widget: FC<IProps> = ({ widgets }) => {
  return (
    <>
      {widgets?.map((widget, index) => (
        <React.Fragment key={index}>
          {widget.widgetType === 'stepper' &&
            <WidgetStepper widget={widget} />
          }
          {widget.widgetType === 'form' &&
            <WidgetForm widget={widget} />
          }
        </React.Fragment>
      ))}
    </>
  )
}

interface IProps {
  widgets?: IWidget[]
}

export default Widget