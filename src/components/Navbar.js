import { useState } from "react";
import React from "react";

import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { CiBoxList } from "react-icons/ci";

function Navbar() {
  const [openLink, setopenLink] = useState(false);

  const toggleNavbar = () => {
    setopenLink(!openLink);
  };

  // useEffect(() => {
  //   if()
  // }, [openLink]);

  console.log(openLink, "Open Link");

  return (
    <div className="navbar">
      <div className="leftSide" id={openLink ? "open" : "close"}>
        {/* if openlink true then open and image will not be shown,  else close and image will show*/}
        <img src={Logo} alt="logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu"> Menu</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>
        <button onClick={toggleNavbar}>
          <CiBoxList />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
