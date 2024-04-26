import React from "react";
import { savedValues } from "../../MultiStep";
import { ResultContainer, ButtonContainer, MButton } from "./styled";
import { SuccessPage } from "../SuccessPage";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleBack: () => void;
}

const StepThree: React.FC<props> = ({ savedValues, handleBack }) => {
  const [success, setSuccess] = React.useState(false);

  return (
    <React.Fragment>
      {success ? (
        <SuccessPage />
      ) : (
        <ResultContainer>
          <h1>Confirme as informações</h1>
          <p>
            <strong>Nome: </strong>
            <strong>
              {savedValues[0].firstName} {savedValues[0].lastName}
            </strong>
          </p>
          <p>
            <strong>Email: </strong> <strong>{savedValues[0].email}</strong>
          </p>
          <p>
            <strong>Telefone: </strong>
            <strong>{savedValues[0].phoneNumber}</strong>
          </p>
          <p>
            <strong>Profissão: </strong>{" "}
            <strong>{savedValues[0].occupation}</strong>
          </p>
          <p>
            <strong>Cidade: </strong> <strong>{savedValues[0].city}</strong>
          </p>
          <ButtonContainer>
            <MButton onClick={handleBack}>Voltar</MButton>
            <MButton
              onClick={() => {
                setSuccess(true);
              }}
            >
              Salvar
            </MButton>
          </ButtonContainer>
        </ResultContainer>
      )}
    </React.Fragment>
  );
};

export default StepThree;
