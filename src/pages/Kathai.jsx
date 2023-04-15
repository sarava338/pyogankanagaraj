import React from "react";
import Post from "../components/post/Post";

const Kathai = () => {
  return (
    <article className="kathai">
      <h1>Kathai</h1>
      <section className="kathai-posts">
        <Post />
        <Post />
        <Post />
      </section>
    </article>
  );
};

export default Kathai;
