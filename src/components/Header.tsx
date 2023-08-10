import { FC } from "react";
import { whiteLogo } from "../utils/constants";
import { THeader } from "../types/types";

const Header: FC<THeader> = ({ toggleMenu, isOpen, handleIconClick }) => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="img-div" onClick={handleIconClick}>
            <img src={whiteLogo} alt="logos" />
          </div>
          <div>
            <a
              onClick={toggleMenu}
              href="#"
              className={`${isOpen ? "close" : ""}`}
              id="menu-icon"
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </a>
            <span onClick={handleIconClick} className="home">
              Home
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
