import React, { useEffect, useState } from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";
import "./page.css";

const Kathai = () => {
  return (
    <article className="kathai">
      <h1>Kathai</h1>
      <section className="kathai-posts">
        <AddPost col="kathai" />
        <AllPosts col="kathai" />
      </section>
    </article>
  );
};

export default Kathai;
