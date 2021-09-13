import React from "react";
import Footer from "./footer";
import Main from "./main";

export default function Home() {
  return (
    <div>
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: "url(/img/background.jpg)" }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">
              Welcome To Glaring Cosmos Gifts
            </h1>
            <p className="intro-subtitle">
              <span className="text-slider-items">
                Creative Hand made gifts,Good Gifts for good relations,Crafting
                your curiosity
              </span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Main />
    <Footer />
    </div>
  );
}
