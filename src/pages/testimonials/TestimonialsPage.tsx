import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonials from "../../components/root/Testimonials";
import "./TestimonialsPage.css";

function TestimonialsPage(): React.ReactElement {

  return (
    <div>
      <Header />
      <div className="testimonialspage-container">
        <div className="testimonialspage-head">
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TestimonialsPage;
