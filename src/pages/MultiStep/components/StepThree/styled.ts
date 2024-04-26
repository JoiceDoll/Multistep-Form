import styled from "styled-components";
import { Button } from "@mui/material";

export const ResultContainer = styled.div`
  width: 70%;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--orange-primary);
    font-size: 1.4rem;
  }

  p {
    color: var(--black-secondary);
  }
`;

export const MButton = styled(Button)`
  width: 45%;
  height: 100%;

  &.MuiButton-root {
    background: var(--black-secondary);
    color: var(--white-primary);

    &:hover {
      background: var(--grey-secondary);
      color: var(--black-primary);
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 70%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
