import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

export type BlogType = {
  blogId: number;
  title: string;
  description: string[];
  imgSrc: string;
  date: string;
};

export default function Blog({ blog }: { blog: BlogType }): React.ReactElement {
  const { blogId, title, description, imgSrc, date } = blog;

  function printLimitedText(text: string) {
    return text.length <= 300 ? text : text.slice(0, 300) + "...";
  }

  return (
    <div
      className="blog-post"
      onClick={() => {
        window.location.href = "/blog/" + blogId;
      }}
    >
      <div className="blog-image">
        <img src={imgSrc} alt="blog" />
      </div>
      <div className="blog-post-content">
        <div className="blog-head-container">
          <h2 className="blog-title">{title}</h2>
        </div>
        <div>
          <div className="blog-date">{date}</div>
          <span className="blog-para-container">
            <p className="blog-para">{printLimitedText(description[0])}</p>
          </span>
          <Link className="blog-read-more" to={"/blog/" + blogId}>
            {"Read more"}
          </Link>
        </div>
      </div>
    </div>
  );
}
