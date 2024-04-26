import React from "react";
import { StepOne, StepTwo, StepThree } from "./components";
import {
  Container,
  RightContainer,
  FormContainer,
  StepsContainer,
} from "./styled";
import MultiStepImage from "@/assets/svg/multiform.svg";
import { StepperComponent } from "@/components";

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
    <Container>
      <FormContainer>
        <StepsContainer>
          <StepperComponent activeStep={activeStep} steps={steps} />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30%",
            }}
          >
            {getStepContent(activeStep)}
          </div>
        </StepsContainer>
      </FormContainer>
      <RightContainer>
        <img src={MultiStepImage} loading="lazy"/>
      </RightContainer>
    </Container>
  );
}

export default MultiStep;
