import "./CardList.css";
import React from "react";
import CardDetail from "./CardDetail";

const CardList = (props) => {
  return (
    <div>
      This is a list of words ready to be flipped.
      <div className='ui bulleted list'>
        {props.wordlist.map((word) => {
          return (
            <CardDetail deck={word.deck} front={word.front} back={word.back} />
          );
        })}
      </div>
      <button className='ui primary button' type='submit'>
        Start filpping
      </button>
    </div>
  );
};

export default CardList;
