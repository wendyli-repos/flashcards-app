import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Route from "./Route";
import CreateCards from "./CreateCards";
import ReviewCards from "./ReviewCards";
import FlashcardList from "./FlascardList";

const App = () => {
  const SAMPLE_CARD = [
    {
      id: 1,
      front: "abolish",
      back: "废除",
      deck: "list1",
    },
    {
      id: 2,
      front: "aboard",
      back: "外国",
      deck: "list1",
    },
    {
      id: 3,
      front: "abanden",
      back: "放弃",
      deck: "list1",
    },
    {
      id: 4,
      front: "candid",
      back: "率真",
      deck: "list1",
    },
    {
      id: 5,
      front: "unmet",
      back: "未满足的",
      deck: "list1",
    },
  ];

  const [flashcards, setFlashCards] = useState(SAMPLE_CARD);

  function onCreateCrads(event) {
    console.log(event.target.value);
    // 如何更新state
    // 更新过的state需要传递给 cardinput的value attr
  }

  return (
    <div className='ui container'>
      <Header />
      <Route path='/'>
        <div>
          <h1>This is the Home page</h1>
        </div>
      </Route>
      <Route path='/create'>
        <CreateCards onCreateCards={onCreateCrads} flashcards={flashcards} />
      </Route>
      <Route path='/review'>
        <ReviewCards />
      </Route>
      <Route path='/review/list1'>
        <FlashcardList list='list1' flashcards={flashcards} />
      </Route>
    </div>
  );
};

export default App;
