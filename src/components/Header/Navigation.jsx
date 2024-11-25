import "./navigation.css";
import Hamburger from "./Hamburger";
const Navigation = ({ toggleMenu }) => {
  return (
    <>
      <Hamburger toggleMenu={toggleMenu} />
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 opacity-0 transition-all duration-300 md:hidden"></div>
      <div
        id="menu"
        className="navigation absolute md:static md:block left-2  top-20 z-10 md:z-0 transform -translate-x-full md:translate-x-0 opacity-0 md:opacity-100 transition-all duration-300"
      >
        <ul className="md:flex md:gap-4 text-lg">
          <li>
            <a href="#" className="hover:text-fuchsia-800">
              LogIn/Regester
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-fuchsia-800">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-fuchsia-800">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
