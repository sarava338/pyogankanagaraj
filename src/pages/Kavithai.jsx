import React from "react";
import AllPosts from "../components/post/AllPosts";
import CreatePost from "../components/post/CreatePost";

const Kavithai = () => {
  return (
    <article className="kavithai">
      <h1>Kavithai</h1>
      <section className="kavithai-posts">
        <CreatePost col="kavithaigal" />
        <AllPosts col="kavithaigal" />
      </section>
    </article>
  );
};

export default Kavithai;
