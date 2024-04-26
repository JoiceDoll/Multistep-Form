import React from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";

interface IProps {
  activeStep: number;
  steps: string[];
}

const StepperComponent: React.FC<IProps> = ({ activeStep, steps }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "2rem",
        minHeight: "100px",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
