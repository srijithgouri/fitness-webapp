import React from "react";
import "./Testimonials.css";
import TestimonialModel, { TestimonialProps } from "./TestimonialModel";
import { useSiteData } from "../../context/SiteDataContext";

export default function Testimonials({
  numberOfTestimonials,
}: {
  numberOfTestimonials?: number | undefined;
}) {
  const [testimonialData, setTestimonialData] =
    React.useState<null | TestimonialProps>(null);
  const data = useSiteData();

  if (!data) {
    return <></>;
  }

  const testimonialsData = numberOfTestimonials
    ? data.pages.testimonials.slice(0, numberOfTestimonials)
    : data.pages.testimonials;

  function TruncateAndReadMore({
    description,
    maxLength,
    link,
  }: {
    description: string;
    maxLength: number;
    link: string;
  }): React.ReactElement {
    if (description.length <= maxLength) {
      return <span>{description}</span>;
    } else {
      const truncatedSentence = description.substring(0, maxLength - 3);
      return <span>{`${truncatedSentence}...`} </span>;
    }
  }

  const toggleClose = () => {
    setTestimonialData(null);
  };

  const toggleOpen = (id: number) => {
    setTestimonialData(data.pages.testimonials[id]);
  };

  return (
    <section className="main-section">
      <div className="testimonials-section">
        <h1>Testimonials</h1>
        {/* <span>This is the testimonial section</span> */}
      </div>
      <div className="testimonials-container">
        <div className="testimonials-cards">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="testimonials-card"
              key={index}
              onClick={() => {
                toggleOpen(index);
              }}
            >
              <div className="testimonials-poster">
                <img src={testimonial.image} alt="person" />
              </div>
              <div className="details">
                <div style={{ margin: "20px" }}>
                  <h1>{testimonial.name}</h1>
                  <h2>
                    before {testimonial.beforeWeight} kg • after{" "}
                    {testimonial.afterWeight} kgs
                  </h2>
                  <div className="testimonials-rating">
                    <img
                      className="testimonials-star"
                      src="/assets/icons/star.svg"
                      alt="sg"
                    />
                    <span>{testimonial.rating}/5</span>
                  </div>
                  <p className="testimonials-desc">
                    <TruncateAndReadMore
                      description={testimonial.description}
                      maxLength={100}
                      link="/"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {testimonialsData &&
          testimonialsData.length < data.pages.testimonials.length && (
            <button
              className={"view-more"}
              onClick={() => {
                window.location.href = "/testimonials";
              }}
            >
              View More
            </button>
          )}
        {testimonialData && (
          <TestimonialModel
            name={testimonialData.name}
            beforeWeight={testimonialData.beforeWeight}
            afterWeight={testimonialData.afterWeight}
            rating={testimonialData.rating}
            description={testimonialData.description}
            image={testimonialData.image}
            isOpen={true}
            handleClose={toggleClose}
          />
        )}
      </div>
    </section>
  );
}
