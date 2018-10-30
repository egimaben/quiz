import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
  <header className="header">
    <h2>Author Quiz</h2>
    Do you know your authors?
     <p><Link to="/add">Add your own?</Link></p>
  </header>
  export default Header;