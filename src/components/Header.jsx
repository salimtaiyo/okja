import React from 'react'
import { Link } from 'react-router-dom';
const Header =  () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li> home</li>
        </Link>

        <Link to="/login">
          <li> Login </li>
        </Link>

        <Link to="/note">
          <li> Notes</li>
        </Link>
      </ul>
    </div>
  )
}

export default  Header;
