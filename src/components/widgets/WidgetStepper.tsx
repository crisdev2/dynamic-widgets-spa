import styled from '@emotion/styled'
import { Step, StepButton, StepLabel, Stepper as MuiStepper } from '@mui/material'
import { FC, useState } from 'react'
import { IWidgetStepper as IWidgetModel } from '../../models/widgetsModel'
import theme from '../../utilities/theme'
import Widgets from '.'

const StyledStepper = styled.div`
  background: ${theme.bg.content};
  padding: 1.5rem;
  border-radius: 0.25rem;
`

const WidgetStepper: FC<IWidgetStepper> = ({ widget }) => {
  const { widgetItems } = widget
  const [ activeStep, setActiveStep ] = useState<number>(widgetItems.findIndex(item => item.itemCompleted))
  const activeWidgets = widgetItems[activeStep].itemWidgets
  return (
    <StyledStepper>
      <MuiStepper nonLinear activeStep={activeStep} alternativeLabel>
        {widgetItems.map((item, index) => (
          <Step key={index} completed={item.itemCompleted} disabled={!item.itemEnabled}>
            <StepButton color="inherit" onClick={() => setActiveStep(index)}>
              <StepLabel>{item.itemTitle}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </MuiStepper>
      <Widgets widgets={activeWidgets} />
    </StyledStepper>
  )
}

interface IWidgetStepper {
  widget: IWidgetModel
}

export default WidgetStepper