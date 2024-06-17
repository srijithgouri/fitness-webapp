import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import "./BlogPage.css";
import { useSiteData } from "../../context/SiteDataContext";

export default function BlogPage(): React.ReactElement {
  const { id } = useParams<{ id: any }>();

  const data = useSiteData();

  if (!data) {
    return <></>;
  }

  if (!data.pages.blogs[id]) {
    return (
      <div>
        <Header />
        <div className="blogs-container">
          <div className="blogs-head">
            <div className="blog-page-post-container">
              <div className="blog-page-post">
                <div className="blog-page-head-container">
                  <h2 className="blog-page-title">Blog Not Found</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, description, imgSrc, date } = data.pages.blogs[id];
  return (
    <div>
      <Header />
      <div className="blogs-container">
        <div className="blogs-head">
          <div className="blog-page-post-container">
            <div className="blog-page-post">
              <div className="blog-page-head-container">
                <h2 className="blog-page-title">{title}</h2>
              </div>
              <div className="blog-image">
                <img src={imgSrc} alt="blog" />
              </div>
              <div>
                <div className="blog-page-date">{date}</div>
                {description.map((para, index) => (
                  <span className="blog-page-para-container" key={index}>
                    <p className="blog-page-para">{para}</p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
