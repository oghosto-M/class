import React from "react";

const Hamburger = ({ toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} id="menu-btn" className="hamburger z-30">
        <div className="hamburger-top"></div>
        <div className="hamburger-middle"></div>
        <div className="hamburger-bottom"></div>
      </button>
    </div>
  );
};

export default Hamburger;
