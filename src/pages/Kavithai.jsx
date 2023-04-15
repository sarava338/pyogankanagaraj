import React from "react";
import Post from "../components/post/Post";

const Kavithai = () => {
  return (
    <article className="kavithai">
      <h1>Kavithai</h1>
      <section className="kavithai-posts">
        <Post />
        <Post />
        <Post />
        <Post />
      </section>
    </article>
  );
};

export default Kavithai;
