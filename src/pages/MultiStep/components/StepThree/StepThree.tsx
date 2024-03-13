import React from "react";
import { savedValues } from "../../MultiStep";

interface props {
  savedValues: [savedValues, React.Dispatch<React.SetStateAction<savedValues>>];
  handleBack: () => void;
}

const StepThree: React.FC<props> = ({ savedValues, handleBack }) => {
  console.log(savedValues[0]);

  return (
    <div>
      <h2>Details</h2>
      <p>
        <span>Name: </span>{" "}
        <span>
          {savedValues[0].firstName} {savedValues[0].lastName}
        </span>
      </p>
      <p>
        <span>Email: </span> <span>{savedValues[0].email}</span>
      </p>
      <p>
        <span>Phone: </span> <span>{savedValues[0].phoneNumber}</span>
      </p>
      <p>
        <span>Occupa: </span> <span>{savedValues[0].occupation}</span>
      </p>
      <p>
        <span>City: </span> <span>{savedValues[0].city}</span>
      </p>
      <div>
        <button onClick={handleBack}>Back</button>
        <button
          onClick={() => {
            alert("Thank you for submitting");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepThree;
