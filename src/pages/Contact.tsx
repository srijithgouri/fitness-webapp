import React, { useState } from "react";
import { parsePhoneNumber } from "libphonenumber-js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!navigator.onLine) {
      alert("Please check your internet connection");
      return;
    }

    const { name, email, phoneNumber, subject, message } = formData;

    if (!name || !email || !phoneNumber || !subject || !message) {
      alert("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    try {
      let phoneNumberObj = parsePhoneNumber(phoneNumber, "IN");
      if (!phoneNumberObj.isValid()) {
        throw new Error("Invalid phone number");
      }
    } catch (error) {
      alert("Please enter a valid phone number");
      console.log(error);
      return;
    }

    setLoading(true);

    const data = new URLSearchParams(formData);

    try {
      const response = await fetch(
        "https://fitnessfreaksindians.com/contactus.php",
        {
          method: "POST",
          body: data,
        },
      );

      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to send message");
      }

      const responseData = await response.json();
      setLoading(false);

      console.log(responseData);
      alert(responseData.message);
      resetForm();
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <Header />
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-heading">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <div className="contact-form-top">
                <div className="contact-form-con">
                  <span className="contact-send-message">
                    Send us a Message
                  </span>
                  <p>
                    Feel free to get in touch with us. We are available to
                    assist you with any inquiries or questions.
                  </p>
                </div>
              </div>
              <div className="contact-form-bottom">
                <form
                  id="contactForm"
                  className="contactForm"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn-submit"
                      style={{
                        backgroundColor: loading ? "#ff6b00" : "#8a2be2",
                      }}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactForm;
