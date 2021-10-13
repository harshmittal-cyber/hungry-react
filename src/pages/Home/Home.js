import React from "react";
import style from "./Home.module.css";
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
                  Hi
                </div>
                <div className={`${style.pizza} flex-display pb-20`}>
                  <img src="/images/pizza.jpg" />
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
