import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Blogs.css";
import Blog from "./Blog";
import { useSiteData } from "../../context/SiteDataContext";

function Blogs(): React.ReactElement {
  const data = useSiteData();

  if (!data) {
    return <></>;
  }

  return (
    <div>
      <Header />
      <div className="blogs-container">
        <div className="blogs-head">
          <div>
            <h1>Blogs</h1>
            <div className="blogs-all">
              {data.pages.blogs.map((blog) => (
                <Blog key={blog.blogId} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
