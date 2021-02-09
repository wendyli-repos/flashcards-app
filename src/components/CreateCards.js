import React from "react";
import CardForm from "./CardForm";
import CardList from "./CardList";

const CreateCards = (props) => {
  return (
    <div>
      <h1>This Is Create Card Tab</h1>
      <CardForm onCreateForm={props.onCreateCards} />
      <hr />
      <CardList wordlist={props.flashcards} />
    </div>
  );
};

export default CreateCards;
