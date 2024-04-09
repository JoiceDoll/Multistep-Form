import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 60rem;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 60%;
  display: flex;
  height: 100%;
`;

export const StepsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 12%;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid grey;
  background: var(--orange-primary);
  opacity: 0.5;

  img {
    width: 60%;
    height: 60%;
  }
`;
