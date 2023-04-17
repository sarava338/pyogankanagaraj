import React from "react";
import AllPosts from "../components/post/AllPosts";

const Kavithai = () => {
  return (
    <article className="kavithai">
      <h1>Kavithai</h1>
      <section className="kavithai-posts">
        <AllPosts col='kavithaigal' />
      </section>
    </article>
  );
};

export default Kavithai;
