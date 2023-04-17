import React, { useEffect, useState } from "react";
import AllPosts from "../components/post/AllPosts";
import CreatePost from "../components/post/CreatePost";

const Kathai = () => {
  return (
    <article className="kathai">
      <h1>Kathai</h1>
      <section className="kathai-posts">
        <CreatePost col="kathaigal" />
        <AllPosts col="kathaigal" />
      </section>
    </article>
  );
};

export default Kathai;
