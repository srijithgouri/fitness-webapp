import Footer from "../components/Footer";
import Header from "../components/Header";
import DontDosSection from "../components/root/DontDosSection";
import HeroSection from "../components/root/HeroSection";
import PricingSection from "../components/root/PricingSection";
import Testimonials from "../components/root/Testimonials";
import Faqs from "./blogs/Faqs";
import "../App.css";

export default function Home(): React.ReactElement {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header />
      <HeroSection />
      <DontDosSection />
      <section>
        <div className="x-section">
          <div className="x-container">
            <div className="x-content">
              <div className="x-image">
                <img src="/assets/images/home/food.png" alt="Shopping" />
              </div>
              <div className="x-text">
                <h1>What we offer</h1>
                <div className="x-preferences">
                  <h3 className="x-preference-title">
                    Customised home based diet plan
                  </h3>
                  <p className="x-preference-description">
                    Customised home based diet plan as per your requirements,
                    food availability, culture, region and all other aspects.
                  </p>
                  <h3 className="x-preference-title">Your taste matter</h3>
                  <p className="x-preference-description">
                    We will take care of your taste buds and wil manage cheat
                    meals.
                  </p>
                  <h3 className="x-preference-title">Your fitness goal</h3>
                  <p className="x-preference-description">
                    Everything is designed as per your fitness goal, your future
                    aim regarding your health. Me and my team will take care of
                    every aspect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="x-section">
          <div className="x-container">
            <div className="x-content x-content-reverse">
              <div className="x-text">
                <h1>Workout we provide</h1>
                <div className="x-preferences">
                  <h3 className="x-preference-title">
                    Guided Workout Videos for Proper Exercise Form
                  </h3>
                  <p className="x-preference-description">
                    You will receive workout videos of each exercise so that you
                    can perform each exercise in proper form.
                  </p>
                  <h3 className="x-preference-title">Flexible Workout Plans</h3>
                  <p className="x-preference-description">
                    You will be able to do all workouts easily at home. Gym
                    workouts will customize as per your gym facility
                  </p>
                  <h3 className="x-preference-title">
                    Continuous Support and Motivation
                  </h3>
                  <p className="x-preference-description">
                    User My team and I will motivate, assist and guide you
                    regularly
                  </p>
                  <h3 className="x-preference-title">Daily Touchbase</h3>
                  <p className="x-preference-description">
                    Daily check ins are there on WhatsApp / telegram
                  </p>
                  <h3 className="x-preference-title">Iterative Improvement</h3>
                  <p className="x-preference-description">
                    Weekly progress reports are there, then accordingly your
                    plans will update after every 3-4 weeks. So that you will
                    get desired results
                  </p>
                </div>
              </div>
              <div className="x-image">
                <img
                  src="/assets/images/home/athletic-person.png"
                  alt="Shopping"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
      <Testimonials numberOfTestimonials={3} />
      <Faqs />
      <Footer />
    </div>
  );
}
