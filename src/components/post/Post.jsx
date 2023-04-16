import React from "react";
import "./post.css";

const Post = (title, content) => {
  return (
    <section className="post">
      <img src="image" alt="image" className="post-image" />
      <div className="post-content">
        <h2>{title || "post title"}</h2>
        <p>{content || "post content"}</p>
      </div>
    </section>
  );
};

export default Post;
