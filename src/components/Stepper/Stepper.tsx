import { Stepper, Step, StepLabel, Box } from "@mui/material";

interface IProps {
  activeStep: number;
  steps: string[];
}

function StepperComponent(props: IProps) {
  const { activeStep, steps } = props;
  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StepperComponent;
