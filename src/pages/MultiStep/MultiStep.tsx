import React from "react";
import { StepOne, StepTwo, StepThree } from "./components";
import { Stepper, Step, StepLabel } from "@mui/material";

export interface savedValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  occupation: string;
}

function getSteps() {
  return ["Informações pessoais", "Informações gerais", "Revisar informações"];
}

function MultiStep() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const savedValues = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    occupation: "",
  });

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <StepOne savedValues={savedValues} handleNext={handleNext} />;
      case 1:
        return (
          <StepTwo
            savedValues={savedValues}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return <StepThree savedValues={savedValues} handleBack={handleBack} />;
      default:
        return "ERROR";
    }
  }

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        <div>{getStepContent(activeStep)}</div>
      </div>
    </div>
  );
}

export default MultiStep;
