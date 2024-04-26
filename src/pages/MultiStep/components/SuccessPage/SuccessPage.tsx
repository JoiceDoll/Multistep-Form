import SuccessImage from "../../../../assets/svg/success.svg";
import { ImageContainer } from "./styled";

const SuccessPage = () => {
  return (
    <ImageContainer>
      <img src={SuccessImage} loading="lazy"/>;
    </ImageContainer>
  );
};

export default SuccessPage;
