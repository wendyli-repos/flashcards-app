import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link href='/' className='item'>
        Home
      </Link>
      <Link href='/create' className='item'>
        Create
      </Link>
      <Link href='/review' className='item'>
        Review
      </Link>
    </div>
  );
};

export default Header;
