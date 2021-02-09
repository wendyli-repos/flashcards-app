import React from "react";
import Link from "./Link";

const ReviewCards = () => {
  return (
    <div>
      <h1>This Is Review Tab</h1>
      <hr />
      <div>Here is to show a list of cards to review.</div>
      <ul>
        <li>
          <Link href='/review/list1'>list1</Link>
        </li>
      </ul>
    </div>
  );
};

export default ReviewCards;
