import React from "react";
import Post from "../components/post/Post";

const Katturai = () => {
  return (
    <article className="katturai">
      <h1>Katturai</h1>
      <section className="katturai-posts">
        <Post />
        <Post />
        <Post />
      </section>
    </article>
  );
};

export default Katturai;
