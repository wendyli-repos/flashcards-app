import "./CardForm.css";
import React from "react";

let formElements = [
  {
    label: "Card Front",
    key: "front",
  },
  { label: "Card Back", key: "back" },
];

const CardForm = (props) => {
  return (
    <div className='ui segment'>
      <p>
        Deck name: # this section is to be edited as an input so user can name
        their deck (feature to be added)
      </p>
      <form onSubmit={props.onCreateForm} className='ui form'>
        {formElements.map((formElement) => {
          return (
            <div className='field'>
              <label>{formElement.label}</label>
              <input className='textfield'></input>
            </div>
          );
        })}
      </form>
      <button className='ui primary button' type='submit'>
        Add word
      </button>
      <button className='ui primary button' type='submit'>
        Finish list and Save to my review list
        (如何选这个的话，会检查用户是否已经登陆，如未登陆，提示不可以存到我的list；询问是否希望登陆，如希望，转到登陆页面；如不希望登陆，则可以直接flip；)
      </button>
    </div>
  );
};

export default CardForm;

//      onChange={props.onInputChange}
