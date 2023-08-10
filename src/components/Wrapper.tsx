import { useState } from "react";
import AboveFooter from "./AboveFooter";
import Footer from "./Footer";
import Header from "./Header";
import Reset from "./Reset";
import { handleIconClick, homePageLink } from "../utils/constants";
import Popup1 from "./Dialog";
import Popup2 from "./Popup2";

const Wrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [isOpenDialog2, setIsOpenDialog2] = useState(false);

  const handleOpenDialog = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setIsOpenDialog(true);
    e.preventDefault();
  };

  const handleOpenDialog2 = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setIsOpenDialog2(true);
    e.preventDefault();
  };

  return (
    <section>
      <Popup1 isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog} />
      <Popup2
        isOpenDialog2={isOpenDialog2}
        setIsOpenDialog2={setIsOpenDialog2}
      />
      <Header
        handleIconClick={handleIconClick(homePageLink)}
        toggleMenu={toggleMenu}
        isOpen={isOpen}
      />
      <nav
        onClick={handleIconClick(homePageLink)}
        className={`menu ${isOpen ? "open" : ""}`}
      >
        <div style={{ marginLeft: "15px" }}>Home</div>
      </nav>
      <Reset />
      <AboveFooter handleIconClick={handleIconClick(homePageLink)} />
      <Footer
        handleOpenDialog={handleOpenDialog}
        handleOpenDialog2={handleOpenDialog2}
      />
    </section>
  );
};

export default Wrapper;
