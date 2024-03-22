import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
  display: flex;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  width: 60%;
  background: purple;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 30%;
  height: 100%;
  background: red;

  img {
    width: 100%;
    height: 100%;
  }
`;
