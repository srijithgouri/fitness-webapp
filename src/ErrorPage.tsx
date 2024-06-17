import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage(): React.ReactElement {
  return (
    <div className="container">
      <div className="error_container">
        <h1 className="error_code">404</h1>
        <p className="error_message">Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg
            className="error_svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="error-go-back-message">
          Let's get you back{" "}
          <Link to="/" className="go-back-link">
            home
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
