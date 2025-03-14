import React from "react";
import { Link } from "react-router-dom";
import './Header.js';

function Header() {
  return (
    <nav className="header"> <b><Link to="/"><div>Home</div></Link></b>
     <nav className="header"></nav>  <b><Link to="/about"><div>About</div></Link></b>
     <nav className="header"></nav>  <b><Link to="/contact"><div>Contact</div></Link></b>
    </nav>
  );
}
export default Header;

