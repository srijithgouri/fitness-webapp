import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";
import { useSiteData } from "../context/SiteDataContext";

export default function RefundAndCancellationPolicy() {
  const data = useSiteData();
  return (
    <div className="about-container">
      <Header />
      <div className="about-content">
        <h1>Refund and Cancellation Policy</h1>
        <p>
          At Fitness Freaks Indians, we are committed to ensuring satisfaction
          with our fitness programs. Our refund policy is designed to give you
          peace of mind when committing to our services.
        </p>
        <div style={{ textAlign: "left" }}>
          <h2>Eligibility for Refund</h2>
          <p>
            You are eligible for a full refund if all of the following
            conditions are met:
          </p>
          <ul>
            <li>
              You have followed the fitness plan consistently for 3 months
              without any breaks.
            </li>
            <li>
              You have actively participated in our guidance sessions and
              utilized the resources provided.
            </li>
            <li>
              You have not achieved any measurable progress towards your fitness
              goals, as agreed upon at the start of the program.
            </li>
          </ul>
          <h2>Process for Requesting a Refund</h2>
          <p>To request a refund, please follow these steps:</p>
          <ol>
            <li>
              Contact our support team within 7 days after the completion of the
              3-month period.
            </li>
            <li>
              Provide a detailed account of your experience and the reasons for
              requesting a refund.
            </li>
            <li>
              Submit any required documentation, such as workout logs or
              progress reports, as evidence of program adherence.
            </li>
          </ol>
          <h2>Limits of Refund Policy</h2>
          <p>
            Please note that refunds are not granted under the following
            circumstances:
          </p>
          <ul>
            <li>If you have not followed the program as prescribed.</li>
            <li>
              If you have taken breaks or have not been consistent with the
              fitness plan.
            </li>
            <li>
              If the lack of results is due to factors outside the scope of the
              program, such as pre-existing health conditions or unauthorized
              diet changes.
            </li>
          </ul>
          <h2>Cancellation Policy</h2>
          <p>
            You can cancel your subscription at anytime. In order to cancel your
            subscription simply send an email from your registered email address
            to {data?.email} at least 3 working days before the billing date.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
