import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "../../MultiStep";
import { StepTwoFields } from "../Fields/Fields";
import { MTextField, MButton, FormContainer, ButtonContainer } from "./styled";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
  handleBack: () => void;
}

const StepTwo: React.FC<props> = ({ savedValues, handleNext, handleBack }) => {
  return (
    <Formik
      initialValues={{
        phoneNumber: savedValues[0].phoneNumber,
        occupation: savedValues[0].occupation,
        city: savedValues[0].city,
      }}
      validationSchema={yup.object({
        phoneNumber: yup
          .string()
          .required("*Informe o número de telefone")
          .max(11, "*O telefone não pode ter mais que 1 caracteres."),
        city: yup.string().required("*Informa a cidade"),
        occupation: yup.string().required("*Informe a profissão."),
      })}
      onSubmit={(values) => {
        savedValues[1]({
          ...savedValues[0],
          phoneNumber: values.phoneNumber,
          occupation: values.occupation,
          city: values.city,
        });
        handleNext();
      }}
    >
      {(formik) => (
        <FormContainer autoComplete="off">
          {StepTwoFields.map((field) => (
            <Field
              error={
                formik.errors[field.name as keyof typeof formik.errors] &&
                formik.touched[field.name as keyof typeof formik.touched]
              }
              name={field.name}
              as={MTextField}
              label={field.label}
              helperText={<ErrorMessage name={field.name} />}
            />
          ))}

          <ButtonContainer>
            <MButton type="button" onClick={handleBack}>
              Anterior
            </MButton>

            <MButton type="submit">Próximo</MButton>
          </ButtonContainer>
        </FormContainer>
      )}
    </Formik>
  );
};

export default StepTwo;
