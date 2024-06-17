import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSiteData } from "../context/SiteDataContext";

export default function Header(): React.ReactElement {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleMenuClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  const data = useSiteData();

  return (
    <nav className="header-nav">
      <div className="header-container">
        <Link to="/" className="site-logo-anchor">
          {/* <img src="/logo.svg" className="logo" alt="Fitness Logo" /> */}
          <span className="site-name">{data?.siteName}</span>
        </Link>
        <div className="header-container2">
          <div className="header-nav-links-container">
            <Link to="/" className="header-link">
              Home
            </Link>
            <Link to="/blogs" className="header-link">
              Blogs
            </Link>
            <Link to="/testimonials" className="header-link">
              Testimonials
            </Link>
            <Link to="/about" className="header-link">
              About us
            </Link>
            <Link to="/contact-us" className="header-link">
              Contact us
            </Link>

            <Link
              to={
                "https://api.whatsapp.com/send/?phone=" +
                data?.phoneNumber.slice(1, -1) +
                "&text&type=phone_number&app_absent=0"
              }
              className="header-whatsapp"
            >
              Go to WhatsApp
            </Link>
          </div>
          <button
            type="button"
            className="menu-button"
            onClick={handleMenuClick}
          >
            <svg
              className="svg-btn"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* <svg
                className={"svg-btn"}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
          </button>
        </div>
        <div className={menuOpen ? "nav-items-container" : "hidden"}>
          <ul className="nav-bar-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
