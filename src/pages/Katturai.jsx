import React from "react";
import AllPosts from "../components/post/AllPosts";
import CreatePost from "../components/post/CreatePost";

const Katturai = () => {
  return (
    <article className="katturai">
      <h1>Katturai</h1>
      <section className="katturai-posts">
        <CreatePost col="katturaigal" />
        <AllPosts col="katturaigal" />
      </section>
    </article>
  );
};

export default Katturai;
