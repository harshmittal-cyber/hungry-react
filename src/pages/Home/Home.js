import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
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
                  <img src="/images/pizza.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
