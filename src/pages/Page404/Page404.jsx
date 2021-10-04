import React from "react";
import { Link } from "react-router-dom";
import style from "./Page404.module.css";
const Page404 = () => {
  return (
    <div className={`${style.page}  pt-16 pb-12 flex flex-col bg-white`}>
      <div className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img className="h-20 w-auto" src="/images/hungrylogo.svg" alt="" />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p
              className="text-sm font-semibold  uppercase tracking-wide"
              style={{ color: "#ff5567" }}
            >
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium"
                style={{ color: "#fc283f" }}
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a
            href="mailto:mittalharsh4321@gmail.com?Subject=ContactSupport"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
            rel="noreferrer"
          >
            Contact Support
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            href="https://www.instagram.com/harsh.mittal17/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Instagram
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            href="https://twitter.com/harsh_mittal18"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
            target="_blank"
          >
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Page404;
