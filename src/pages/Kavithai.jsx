import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";
import "./page.css";

const Kavithai = () => {
  return (
    <article className="kavithai">
      <h1>Kavithai</h1>
      <section className="kavithai-posts">
        <AddPost col="kavithai" />
        <AllPosts col="kavithai" />
      </section>
    </article>
  );
};

export default Kavithai;
