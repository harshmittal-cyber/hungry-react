import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../../components/Footer/Footer";

const Images = [
  {
    path: `${process.env.REACT_APP_BASE_URL}/images/Deliveryboy.svg`,
    title: "Fastest Delivery",
  },
  {
    path: `${process.env.REACT_APP_BASE_URL}/images/driverboy.svg`,
    title: "Easy To Order",
  },
  {
    path: `${process.env.REACT_APP_BASE_URL}/images/freeshipboy.svg`,
    title: "Free Shipping",
  },
];

const Home = () => {
  return (
    <>
      <div className={`${style.home}`}>
        <div className={`${style.intro_main}`}>
          <div className={`${style.intro}`}>
            <div className={`${style.width_container} pt-40`}>
              <div className={`${style.intro_container} pb-200`}>
                <div
                  className={`${style.intro_content_container} pt-0 align-stretch `}
                >
                  <div
                    className={`${style.intro_content_container_inner} pb-24 pt-16 `}
                  >
                    <div className={`${style.intro_head} py-16`}>
                      <div
                        className={`${style.intro_text} flex-display flex-column align-stretch`}
                      >
                        Fastest In Delivering Your Food
                      </div>
                      <h1
                        className={`${style.intro_hungry} ${style.hungry_heading} my-0`}
                      >
                        Hungry? Order Your Food
                      </h1>
                    </div>
                    <div className={`pb-24 ${style.heading_shrt}`}>
                      Our job is to filling your tummy with delicious food
                    </div>
                    <div className={`${style.button_container}`}>
                      <Link to="/menu">
                        <button
                          className={`${style.menu_btn} ${style.home_btn} root_button`}
                        >
                          <span class={`${style.button_wrapper}`}>
                            <span className={`${style.btn_text}`}>
                              Explore Our Menu
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className={`${style.pizza} flex-display pb-20`}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/images/pizza.png`}
                      alt="homepizza"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.hungry_portfolio}`}>
          <h1 className={`${style.section_heading}`}>
            <span>What We Serve</span>
          </h1>
          <h1 className={` ${style.section_heading_2}`}>
            <span> Your Favourite Food Delivery Partner</span>
          </h1>
          <div className={`${style.hungry_portfolio_container}`}>
            {Images.map((item) => {
              return (
                <div
                  className={`${style.hungry_image_container}`}
                  key={item.id}
                >
                  <LazyLoadImage src={`${item.path}`} alt="hungry-images" />
                  <h1 class={`${style.image_title}`}>
                    <span>{item.title}</span>
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
