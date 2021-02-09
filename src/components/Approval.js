import "./Approval.css";
import React, { useState } from "react";

const Approval = ({ cardid, numberMastered }) => {
  // number to record how many words has been clicked as "got it"
  const [numberGotIt, setnumberGotIt] = useState(null);

  const getNumberGotIt = () => {
    setnumberGotIt(numberGotIt + 1);
  };

  console.log(numberGotIt);
  return (
    <div className='ui buttons'>
      <div
        className='ui green basic button'
        onClick={() => {
          getNumberGotIt(numberGotIt);
        }}
      >
        Got it
      </div>
      <div className='ui red basic button'>Not quite</div>
    </div>
  );
};

export default Approval;
