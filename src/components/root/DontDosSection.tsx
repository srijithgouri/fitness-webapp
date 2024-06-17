import React from "react";
import "./DontDosSection.css";

function DontDosSection(): React.ReactElement {
  return (
    <section className="dds-section">
      <div className="dds-section-header">
        <h2 className="dds-section-heading">
          <span className="dds-heading-text dds-heading-h2">
            We don't believe in
          </span>
        </h2>
      </div>
      <div className="dds-section-items">
        <div className="dds-section-item">
          <div className="dds-item-container">
            <div>
              <div className="dds-item-head">
                <div className="dds-item-head2">
                  <div>
                    <span className="dds-item-head-icon">
                      <span
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 15l3.5-3.5" />
                          <path d="M20.3 18c.4-1 .7-2.2.7-3.4C21 9.8 17 6 12 6s-9 3.8-9 8.6c0 1.2.3 2.4.7 3.4" />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <h3 className="dds-heading">
                    <div className="dds-heading-text">FAD trending diets</div>
                  </h3>
                </div>
                <div className="dds-desc-container">
                  <div className="dds-heading-text dds-desc">
                    <span>
                      Our home based food is always best and healthiest option
                      for getting good healthy body. You just need a little bit
                      portion control in it without changing it completely.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dds-section-item">
          <div className="dds-item-container">
            <div>
              <div className="dds-item-head">
                <div className="dds-item-head2">
                  <div>
                    <span className="dds-item-head-icon">
                      <span
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      >
                        <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V7C21 4 19 2 16 2ZM17.57 8.48L15.39 11.98C15.33 12.07 15.23 12.14 15.13 12.15C15.11 12.15 15.09 12.15 15.08 12.15C14.99 12.15 14.9 12.12 14.83 12.06C13.22 10.63 10.8 10.63 9.19 12.06C9.11 12.13 9 12.17 8.89 12.15C8.78 12.13 8.68 12.07 8.63 11.98L6.45 8.48C6.33 8.33 6.36 8.13 6.5 8C9.63 5.21 14.36 5.21 17.5 8C17.64 8.13 17.67 8.33 17.57 8.48Z"
                            fill="#292D32"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <h3 className="dds-heading">
                    <div className="dds-heading-text">Food Measuring</div>
                  </h3>
                </div>
                <div className="dds-desc-container">
                  <div className="dds-heading-text dds-desc">
                    <span>
                      No need to measure your every meal. Me and my team will
                      guide you the simplest way to control your meal portions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dds-section-item">
          <div className="dds-item-container">
            <div>
              <div className="dds-item-head">
                <div className="dds-item-head2">
                  <div>
                    <span className="dds-item-head-icon">
                      <span
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      >
                        <img
                          src="/assets/icons/snowflake.svg"
                          alt="snowflake"
                        />
                      </span>
                    </span>
                  </div>
                  <h3 className="dds-heading">
                    <div className="dds-heading-text">
                      Useless supplements and shakes
                    </div>
                  </h3>
                </div>
                <div className="dds-desc-container">
                  <div className="dds-heading-text dds-desc">
                    <span>
                      We don't recommend any useless supplements and shakes to
                      our clients that will impact their health badly in long
                      run.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DontDosSection;
