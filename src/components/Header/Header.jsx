import Logo from "@components/Logo";
import Navigation from "./Navigation";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((preve) => !preve);
  };

  return (
    <>
      <header
        className={`header flex md:flex-row justify-between items-center  text-2xl px-6 ${
          isOpen ? "opened" : ""
        }`}
      >
        <Logo />

        <Navigation toggleMenu={toggleMenu} />
      </header>
    </>
  );
};

export default Header;
