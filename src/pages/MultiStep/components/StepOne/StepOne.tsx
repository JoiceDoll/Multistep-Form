import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "../../MultiStep";
import { stepOneFields } from "../Fields/Fields";
import { FormContainer, MTextField , MButton} from "./styled";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleNext: () => void;
}

const StepOne: React.FC<props> = ({ savedValues, handleNext }) => {
  return (
    <Formik
      initialValues={{
        firstName: savedValues[0].firstName,
        lastName: savedValues[0].lastName,
        email: savedValues[0].email,
      }}
      validationSchema={yup.object({
        firstName: yup.string().required("* O campo é obrigatório."),
        lastName: yup.string().required("* O campo é obrigatório."),
        email: yup
          .string()
          .email("*O e-mail é inválido.")
          .required("* O campo é obrigatório."),
      })}
      onSubmit={(values) => {
        savedValues[1]({
          ...savedValues[0],
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
        });
        handleNext();
      }}
    >
      {(formik) => {
        return (
          <FormContainer autoComplete="off">
            {stepOneFields.map((field) => (
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

            <MButton
              variant="contained"
              type="submit"
            >
              Próximo
            </MButton>
          </FormContainer>
        );
      }}
    </Formik>
  );
};

export default StepOne;
