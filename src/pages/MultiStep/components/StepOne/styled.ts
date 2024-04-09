import styled from "styled-components";
import { Form } from "formik";
import { TextField, Button } from "@mui/material";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 25rem;
  justify-content: center;
`;

export const MTextField = styled(TextField)`
  width: 70%;
  max-width: 43rem;
`;

export const MButton = styled(Button)`
  width: 70%;
  height: 15%;

  &.MuiButton-root {
    background: var(--black-secondary);
  }

  &:hover {
    background: var(--grey-secondary);
  }
`;
