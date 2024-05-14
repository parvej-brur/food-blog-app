import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialmedia">
        <CiInstagram />

        <FaFacebook />
        <FaYoutube />
        <CiTwitter />
      </div>
      <p>&copy; 2024 powered by anika.</p>
    </div>
  );
}

export default Footer;
