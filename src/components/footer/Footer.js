import React from "react";
import "./footer.css";
import {
  FaWhatsapp,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { FiYoutube, FiSmartphone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="top-footer" className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 contact">
            <h3>Manter contato</h3>
            <h4>Centro Universitário Vale do Cricaré</h4>
            <ul>
              <li>
                <i className="slicon-globe">
                  <FaGlobe />
                </i>
                <a href="https://ivc.br" target="_blank" rel="noreferrer">
                  https://ivc.br
                </a>
              </li>
              <li>
                <i className="slicon-phone">
                  <FaPhone />
                </i>
                <a href="tel:(27) 3313-0000" target="_blank" rel="noreferrer">
                  (27) 3313-0000
                </a>
              </li>
              <li>
                <i className="slicon-envelope">
                  <FaEnvelope />
                </i>
                <a href="mailto:ivc@ivc.br" target="_blank" rel="noreferrer">
                  ivc@ivc.br
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-aside">
            <div className="col-md-5 social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/univc.oficial/?ref=bookmarks"
                    target="_blank"
                    className="facebook btn"
                    rel="noreferrer"
                  >
                    <i className="slicon-social-facebook">
                      <FaFacebookF />
                    </i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/univc.oficial"
                    target="_blank"
                    className="twitter btn"
                    rel="noreferrer"
                  >
                    <i className="slicon-social-twitter">
                      <FaTwitter />
                    </i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/channel/UCs_-q72v6ZrdgjVAPUE6GUQ?view_as=subscriber"
                    target="_blank"
                    className="youtube btn"
                    rel="noreferrer"
                  >
                    <i className="slicon-social-youtube">
                      <FiYoutube />
                    </i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/univc.oficial/"
                    target="_blank"
                    className="instagram btn"
                    rel="noreferrer"
                  >
                    <i className="slicon-social-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=55 27 99998-0532"
                    target="_blank"
                    className="whatsapp btn"
                    rel="noreferrer"
                  >
                    <i className="fa-whatsapp">
                      <FaWhatsapp />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="plugins_standard">
              <div className="mobilefooter mb-2">
                <button
                  className="btn btn-success"
                  href="https://download.moodle.org/mobile?version=2019111801&amp;lang=pt_br&amp;iosappid=633359593&amp;androidappid=com.moodle.moodlemobile"
                >
                  <i className="slicon-screen-smartphone">
                    <FiSmartphone />
                  </i>
                  Obter o aplicativo para dispositivos móveis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
