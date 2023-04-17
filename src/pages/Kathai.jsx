import React, { useEffect, useState } from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";

const Kathai = () => {
  return (
    <article className="kathai">
      <h1>Kathai</h1>
      <section className="kathai-posts">
        <AddPost col="kathaigal" />
        <AllPosts col="kathaigal" />
      </section>
    </article>
  );
};

export default Kathai;
