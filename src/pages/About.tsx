import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Fitness Freaks Indians! I'm Karan Verma, a seasoned fitness
          expert with over 6 years of experience in online fitness coaching.
          Throughout my career, I've had the privilege of working with over
          1000+ clients, helping them achieve their health and fitness goals
          through personalized training and guidance.
        </p>
        <p>
          At Fitness Freaks Indians, we are dedicated to empowering individuals
          across India and across the world to embark on their fitness journeys
          with confidence and knowledge.
        </p>
        <p>
          Whether you're aiming to lose weight, build muscle, or improve overall
          wellness, our tailored programs and expert advice are designed to
          support you every step of the way.
        </p>
        <p>
          Join our community and let's transform your fitness goals into
          reality. Together, we'll unlock your full potential and embrace a
          healthier, fitter lifestyle.
        </p>
      </div>
      <Footer />
    </div>
  );
}
