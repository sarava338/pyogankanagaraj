import React, { useEffect, useState } from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";

const Kathai = () => {
  return (
    <article>
      <h1>Kathai</h1>
      <section>
        <AddPost col="kathai" />
        <AllPosts col="kathai" />
      </section>
    </article>
  );
};

export default Kathai;
