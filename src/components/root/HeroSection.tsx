import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className={"hero"}>
      <div className={"overlay"}></div>
      <div className={"content"}>
        <h1>The #1 Customised 100 days transformation plan</h1>
        <p>
          Tired of not seeing the results you want? My customized plan will help
          you gain muscle, lose stubborn fat and finally achieve the body you’ve
          always wanted
          <br />
        </p>
        <div className={"hero-buttons"}>
          <button
            className={"button"}
            onClick={() => {
              window.open("/contact-us", "_blank");
            }}
          >
            BOOK FREE CONSULTATION WITH COACH
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
