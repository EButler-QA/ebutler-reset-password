import Map from "../assets/fa-solid_map-pin.svg";
import Envelop from "../assets/teenyicons_envelope-solid.svg";
import Phone from "../assets/fa6-solid_phone-flip.svg";
import Google from "../assets/Google Play.svg";
import AppS from "../assets/App Store.svg";

import Image from "../assets/image (4).png";
import { ReactComponent as Facebook } from "../assets/fa_facebook (1).svg";
import { ReactComponent as Twitter } from "../assets/mdi_twitter.svg";
import { ReactComponent as Linkedin } from "../assets/uil_linkedin.svg";
import { ReactComponent as Instagram } from "../assets/mdi_instagram.svg";
import { FC } from "react";
import { TAboveFooter } from "../types/types";

const AboveFooter: FC<TAboveFooter> = ({ handleIconClick }) => {
  return (
    <div className="above-footer">
      <div className="container">
        <div className="above-footer-main">
          <div>
            <div className="above-footer-main-div">
              <div className="svg-div">
                <img src={Map} alt="svg" />
              </div>
              <a href="https://goo.gl/maps/qq6bRz5ANhD2">
                Address: Al Nasr Tower B, 6th Floor, Doha, Qatar
              </a>
            </div>
            <div className="above-footer-main-div">
              <div className="svg-div">
                <img src={Envelop} alt="Envelop" />
              </div>
              <a href="mailto:contact@e-butler.com">
                Email: contact@e-butler.com
              </a>
            </div>
            <div className="above-footer-main-div">
              <div className="svg-div">
                <img src={Phone} alt="svg" />
              </div>
              <a href="tel:+974 66555142">+974 66555142</a>
            </div>
          </div>
          <div className="fb">
            <div className="img-div-soc">
              <Facebook
                onClick={() =>
                  handleIconClick("https://www.facebook.com/EButlerApp/")
                }
              />
              <Twitter
                onClick={() =>
                  handleIconClick("https://twitter.com/ebutler_app")
                }
              />
              <Instagram
                onClick={() =>
                  handleIconClick(
                    "https://www.instagram.com/ebutler.app/?igshid=1lnawicasvii0"
                  )
                }
              />

              <Linkedin
                onClick={() =>
                  handleIconClick(
                    "https://www.linkedin.com/company/e-butler/about"
                  )
                }
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: "50%" }}
                src={Image}
                alt="Theqa"
                onClick={() =>
                  handleIconClick(
                    "http://www.theqa.qa/certificates/details/2a2dfa6b-d5b5-4575-b232-9c3811777d1e"
                  )
                }
              />
            </div>
          </div>
          <div style={{ width: "400px" }} className="fb-sib">
            <div className="app">
              <img src={Google} alt="Google" />
              <img src={AppS} alt="AppS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
