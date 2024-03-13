import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { savedValues } from "../../MultiStep";
import { TextField } from "@mui/material";

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
          .required("This field is required")
          .max(11, "Phone number should not be more than 11 characters"),
        city: yup.string().required("This field is required"),
        occupation: yup.string().required("This field is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
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
        <Form autoComplete="off">
          <Field
            error={formik.errors.phoneNumber && formik.touched.phoneNumber}
            name="phoneNumber"
            as={TextField}
            label="Phone Number"
            helperText={<ErrorMessage name="phoneNumber" />}
          />
          <Field
            error={formik.errors.occupation && formik.touched.occupation}
            name="occupation"
            as={TextField}
            label="Occupation"
            helperText={<ErrorMessage name="occupation" />}
          />
          <Field
            error={formik.errors.city && formik.touched.city}
            name="city"
            as={TextField}
            label="City"
            helperText={<ErrorMessage name="city" />}
          />
          <div>
            <button type="button" onClick={handleBack}>
              Back
            </button>

            <button type="submit">Next</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
