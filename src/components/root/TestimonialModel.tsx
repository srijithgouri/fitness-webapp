import React from "react";
import "./TestimonialModel.css";

export type TestimonialProps = {
  name?: string;
  beforeWeight?: number;
  afterWeight?: number;
  rating?: number;
  description?: string;
  image?: string;
  isOpen?: boolean;
  handleClose?: () => void;
};

const TestimonialModel: React.FC<TestimonialProps> = ({
  name = "Private",
  beforeWeight = NaN,
  afterWeight = NaN,
  rating = NaN,
  description = "N/A",
  image = "https://via.placeholder.com/150",
  isOpen = false,
  handleClose,
}) => {
  return (
    <div className="modal-container">
      <div
        className={`modal-overlay ${true ? "open" : ""}`}
        onClick={handleClose}
      >
        <div
          className="modal-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-header">
            <div className="avatar-container">
              <img src={image} alt="avatar" />
              <button
                type="button"
                className="close-button"
                onClick={handleClose}
              >
                <svg
                  aria-label="Close"
                  className="close-icon"
                  fill="currentColor"
                  height="18"
                  role="img"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <title>Close</title>
                  <polyline
                    fill="none"
                    points="20.643 3.357 12 12 3.353 20.647"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    x1="20.649"
                    x2="3.354"
                    y1="20.649"
                    y2="3.354"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <h1 className="modal-title">{name}</h1>
            <p>
              <span className="before-weight">Before {beforeWeight}kg</span> •{" "}
              <span className="after-weight">After {afterWeight}kg</span>
            </p>
            <div className="testimonials-rating">
              <img className="testimonials-star" src="/assets/icons/star.svg" alt="sg" />
              <span>{rating}/5</span>
            </div>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModel;
