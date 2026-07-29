import React, {useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main" id="blogs" aria-labelledby="writing-title">
        <div className="blog-header">
          <h2 className="blog-header-text" id="writing-title">
            {blogSection.title}
          </h2>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map(blog => (
              <BlogCard key={blog.url} isDark={isDark} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
}
