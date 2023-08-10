import { FC } from "react";
import { TFooter } from "../types/types";

const Footer: FC<TFooter> = ({ handleOpenDialog, handleOpenDialog2 }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div>
            <span>Copyright © 2019. All Rights Reserved </span>
          </div>
          <div style={{ display: "flex", gap: "25px" }}>
            <a style={{ color: "white" }} href="" onClick={handleOpenDialog}>
              Terms & conditions{" "}
            </a>
            <a onClick={handleOpenDialog2} href="" style={{ color: "white" }}>
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
