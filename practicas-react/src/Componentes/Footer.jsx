import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.facebook.com/MarcosDGimenez.12/?locale=es_LA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/marcosdgimenez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiInstagram />
      </a>

      
    </div>
  );
};

export default Footer;
