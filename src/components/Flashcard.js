import "./Flashcard.css";
import React, { useState } from "react";

const Flashcard = ({ activecard }) => {
  // set if the card is flipped
  const [flip, setFlip] = useState(false);
  const flipCard = () => {
    setFlip(!flip);
  };
  const is_flipped = flip ? "is-flipped" : "";

  return (
    <div className='card-container'>
      <div
        className='scene'
        // Kyle方法
        // onClick={() => {
        //   setFlip(!flip);
        // }}
        // 我把onclick单独写里一个arrow function，也许有潜在问题，待项目完成后确认
      >
        <div className={`card ${is_flipped}`} onClick={flipCard}>
          {flip ? (
            <div className='card-back'>{activecard.back}</div>
          ) : (
            <div className='card-front'>{activecard.front}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
