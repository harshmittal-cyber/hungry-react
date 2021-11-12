import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  return (
    <div className={`${style.container} ${style.back}`}>
      <div className={`${style.footer_container}`}>
        <div className={`${style.footer_left}`}>
          <div>
            {/* <LazyLoadImage
              src={`${process.env.REACT_APP_BASE_URL}/images/hungrylogo.svg`}
              alt="hungry-logo"
              className={`${style.logo}`}
            /> */}
            HUNGRY
            <div className={`${style.copyright_container_1}`}>
              Copyright © Hungry Food Pvt. Ltd.
            </div>
          </div>
        </div>
        <div className={`${style.footer_middle}`}>
          <div className={`${style.middle_container}`}>
            <div>
              <div className={`${style.middle_data_container}`}>
                <p className={`${style.heading}`}>About</p>
                <div className={`${style.links}`}>
                  <p>
                    <Link to="/">About Us</Link>
                  </p>
                  <p>
                    <Link to="/">Features</Link>
                  </p>
                  <p>
                    <Link to="/">News</Link>
                  </p>
                  <p>
                    <Link to="/menu">Menu</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={`${style.middle_data_container}`}>
                <p className={`${style.heading}`}>Company</p>
                <div className={`${style.links}`}>
                  <p>
                    <Link to="/">Why Hungry?</Link>
                  </p>
                  <p>
                    <Link to="/">Partner With Us</Link>
                  </p>
                  <p>
                    <Link to="/">FAQ</Link>
                  </p>
                  <p>
                    <Link to="/">Blog</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={`${style.middle_data_container}`}>
                <p className={`${style.heading}`}>Support</p>
                <div className={`${style.links}`}>
                  <p>
                    <Link to="/">Account</Link>
                  </p>
                  <p>
                    <Link to="/">Support Center</Link>
                  </p>
                  <p>
                    <Link to="/">Feedback</Link>
                  </p>
                  <p>
                    <Link to="/">Accesbility</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.footer_right}`}>
          <div
            className={`${style.middle_data_container} ${style.right_container}`}
          >
            <div className={`${style.social_container}`}>
              <p className={`${style.my_16}`}>FOLLOW US ON</p>
              <div className={`${style.social_links}`}>
                <a
                  href="https://www.facebook.com/profile.php?id=100045967477489"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage
                    alt="Hungry-facebook-Page"
                    src={`${process.env.REACT_APP_BASE_URL}/images/facebook.png`}
                  />
                </a>

                <a
                  href="https://www.instagram.com/harsh.mittal17/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage
                    alt="Hungry-Instagram-Page"
                    src={`${process.env.REACT_APP_BASE_URL}/images/instagram.png`}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCoFJehYl95euBcllIJK86sA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage
                    alt="Hungry-Youtube-Page"
                    src={`${process.env.REACT_APP_BASE_URL}/images/youtube.png`}
                  />
                </a>
                <a
                  href="https://twitter.com/harsh_mittal18"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage
                    alt="Hungry-twitter-Page"
                    src={`${process.env.REACT_APP_BASE_URL}/images/twitter.png`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-mittal-252793206/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LazyLoadImage
                    alt="Hungry-linkedin-Page"
                    src={`${process.env.REACT_APP_BASE_URL}/images/linkedin.png`}
                  />
                </a>
              </div>
            </div>
            <div className={`${style.contact_container}`}>
              <div
                className={`${style.middle_data_container} ${style.right_container}`}
              >
                <p className={`${style.my_16}`}>CONTACT US</p>
                <div className={`${style.links}`}>
                  <p className={`${style.row}`}>
                    <LazyLoadImage
                      src={`${process.env.REACT_APP_BASE_URL}/images/telephone.png`}
                      alt="Hungry-telephone"
                    />
                    <a href="tel:9053268000">9053268000</a>
                  </p>
                  <p className={`${style.row}`}>
                    <LazyLoadImage
                      src={`${process.env.REACT_APP_BASE_URL}/images/mail.png`}
                      alt="Hungry-telephone"
                    />
                    <a
                      href="mailto:mittalharsh4321@gmail.com?Subject=Enquiry"
                      target="_top"
                    >
                      mittalharsh4321@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className={`${style.copyright_container_2}`}>
              Copyright © Hungry Food Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
