import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";

const Kavithai = () => {
  return (
    <article className="kavithai">
      <h1>Kavithai</h1>
      <section className="kavithai-posts">
        <AddPost col="kavithaigal" />
        <AllPosts col="kavithaigal" />
      </section>
    </article>
  );
};

export default Kavithai;
