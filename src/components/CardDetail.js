import React from "react";

const CardDetail = (props) => {
  return (
    <React.Fragment>
      <div className='item'>
        {props.deck}: {props.front}-{props.back}
        <button className='ui negative basic button'>X</button>
      </div>
    </React.Fragment>
  );
};

export default CardDetail;
