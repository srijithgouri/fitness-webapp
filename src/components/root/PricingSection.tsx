import React, { useState } from "react";
import "./PricingSection.css";
import { useSiteData } from "../../context/SiteDataContext";

export default function PricingSection(): React.ReactElement {
  const [selectedValue, setSelectedValue] = useState<"wl" | "wg">("wl");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const data = useSiteData();

  return (
    <section className="main-section">
      <div className="pricing-section">
        <h1>Our Pricing</h1>
        <span>Explore our diverse range of plans</span>
      </div>
      <div className="pricing-section">
        <div className="plan-container">
          <div className="cycle-selector-buttons-old">
            <div
              className={`cycle-selector-buttons-old-radio ${selectedValue === "wl" ? "active" : ""}`}
            >
              <input
                type="radio"
                id="cycle-1"
                value="wl"
                checked={selectedValue === "wl"}
                onChange={handleChange}
              />
              <label
                htmlFor="cycle-1"
                className={`radio-btn-label ${selectedValue === "wg" ? "active" : ""}`}
              >
                Weight loss
              </label>
            </div>
            <div
              className={`cycle-selector-buttons-old-radio ${selectedValue === "wg" ? "active" : ""}`}
            >
              <input
                type="radio"
                id="cycle-3"
                value="wg"
                checked={selectedValue === "wg"}
                onChange={handleChange}
              />
              <label
                htmlFor="cycle-3"
                className={`radio-btn-label ${selectedValue === "wl" ? "active" : ""}`}
              >
                Weight gain
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-cards">
        {data?.pages.plans[selectedValue].map((item, index) => (
          <div className="pricing-container" key={item.id}>
            <div className="pricing-box-container">
              <h3
                className="pricing-title"
                style={{
                  color: selectedValue === "wl" ? "#FF005A" : "#FF2500",
                }}
              >
                {selectedValue === "wl" ? "Weight Loss" : "Weight Gain"}
              </h3>
              <h3 className="pricing-title">{item.title}</h3>
              <div className="pricing-price">
                <span
                  style={{
                    textDecoration: "line-through",
                    textDecorationThickness: "2px",
                    fontSize: "1.4rem",
                    color: "gray",
                  }}
                >
                  {"₹ " + item.cutPrice}
                </span>
                <span>₹{item.price}</span>
              </div>
              <div className="pricing-save">
                <span
                  style={{
                    color: "green",
                    fontWeight: "bold",
                  }}
                >
                  {"Save ₹ " + item.savePrice}
                </span>
              </div>
              <p className="pricing-description">{item.description}</p>
              <div className="pricing-bottom-container">
                <a href={"/order/" + item.id} className="pricing-button">
                  Get started today
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
