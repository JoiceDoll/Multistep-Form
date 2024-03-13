import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "../../MultiStep";
import { TextField } from "@mui/material";

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
        firstName: yup
          .string()
          .required("This field is required")
          .max(20, "Name should not be more than 20 characters"),
        lastName: yup
          .string()
          .required("This field is required")
          .max(20, "Name should not be more than 20 characters"),
        email: yup
          .string()
          .email("Invalid email address")
          .required("This field is required"),
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
          <Form autoComplete="off">
            <Field
              error={formik.errors.firstName && formik.touched.firstName}
              name="firstName"
              as={TextField}
              label="First Name"
              helperText={<ErrorMessage name="firstName" />}
            />
            <Field
              error={formik.errors.lastName && formik.touched.lastName}
              name="lastName"
              as={TextField}
              label="Last Name"
              helperText={<ErrorMessage name="lastName" />}
            />
            <Field
              error={formik.errors.email && formik.touched.email}
              name="email"
              as={TextField}
              label="Email"
              helperText={<ErrorMessage name="email" />}
            />
            <button type="submit">Next</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default StepOne;
