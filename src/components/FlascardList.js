import "./FlashcardList.css";
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import Approval from "./Approval";

const FlashcardList = ({ list, flashcards }) => {
  const [activeCardIndex, setactiveCardIndex] = useState(0);
  console.log("Reviewing card: ---> ", flashcards[activeCardIndex]);

  const onPreviousClick = (activeCardIndex) => {
    if (activeCardIndex === 0) {
      setactiveCardIndex(flashcards.length - 1);
    } else {
      setactiveCardIndex(activeCardIndex - 1);
    }
  };

  const onNextClick = (activeCardIndex) => {
    if (activeCardIndex >= flashcards.length - 1) {
      setactiveCardIndex(0);
    } else {
      setactiveCardIndex(activeCardIndex + 1);
    }
  };

  return (
    <div>
      <h1>This Is The Flash Cards List Page of 「{list}」</h1>
      <h2>Total 「{flashcards.length}」 cards in this deck.</h2>
      <h2>You've remembered XX cards in this deck.</h2>
      <div className='ui indicating progress' data-percent='74'>
        <div className='bar'></div>
      </div>
      <h2>
        You are reviewing Index Number 「{activeCardIndex}」 card in the deck
      </h2>
      {/* {props.flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })} */}

      <Flashcard activecard={flashcards[activeCardIndex]} />
      <Approval cardid={activeCardIndex} numberMastered={null} />
      <div className='arrow-container'>
        <i
          className='arrow left icon large'
          onClick={() => {
            onPreviousClick(activeCardIndex);
          }}
        ></i>
        <i
          className='arrow right icon large'
          onClick={() => {
            onNextClick(activeCardIndex);
          }}
        ></i>
      </div>
    </div>
  );
};

export default FlashcardList;
