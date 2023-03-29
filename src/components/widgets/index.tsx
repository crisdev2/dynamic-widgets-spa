import React, { FC } from 'react'
import { IWidget } from '../../models/widgetsModel'
import WidgetForm from './WidgetForm'
import WidgetStepper from './WidgetStepper'

const Widgets: FC<IWidgets> = ({ widgets }) => {
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

interface IWidgets {
  widgets?: IWidget[]
}

export default Widgets