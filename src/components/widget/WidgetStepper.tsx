import styled from '@emotion/styled'
import { Step, StepButton, StepLabel, Stepper as MuiStepper } from '@mui/material'
import { FC, useState } from 'react'
import { IWidgetStepper as IWidgetModel } from '../../models/widgetsModel'
import theme from '../../utilities/theme'
import Widget from './Widget'

const StyledStepper = styled.div`
  background: ${props => theme(props.theme.palette?.mode === 'dark').bg.content};
  padding: 1.5rem;
  border-radius: 0.25rem;
  box-shadow: ${props => props.theme.palette?.mode === 'dark' ? 'none' : '0px 0px 35px 0px rgba(154,161,171,0.15)'};
`

const StyledStep = styled(Step)`
  margin-bottom: 20px;
`

const WidgetStepper: FC<IProps> = ({ widget }) => {
  const { widgetItems } = widget
  const [ activeStep, setActiveStep ] = useState<number>(widgetItems.findIndex(item => item.itemCompleted))
  const activeWidgets = widgetItems[activeStep].itemWidgets
  return (
    <StyledStepper>
      <MuiStepper nonLinear activeStep={activeStep} alternativeLabel>
        {widgetItems.map((item, index) => (
          <StyledStep key={index} completed={item.itemCompleted} disabled={!item.itemEnabled}>
            <StepButton color="inherit" onClick={() => setActiveStep(index)}>
              <StepLabel>{item.itemTitle}</StepLabel>
            </StepButton>
          </StyledStep>
        ))}
      </MuiStepper>
      <Widget widgets={activeWidgets} />
    </StyledStepper>
  )
}

interface IProps {
  widget: IWidgetModel
}

export default WidgetStepper