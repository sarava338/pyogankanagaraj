import React, { useEffect, useState } from "react";
import AllPosts from "../components/post/AllPosts";

const Kathai = () => {
  return (
    <article className="kathai">
      <h1>Kathai</h1>
      <section className="kathai-posts">
        <AllPosts col="kathaigal" />
      </section>
    </article>
  );
};

export default Kathai;
