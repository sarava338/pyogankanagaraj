import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";

const Kavithai = () => {
  return (
    <article>
      <h1>Kavithai</h1>
      <section>
        <AddPost col="kavithai" />
        <AllPosts col="kavithai" />
      </section>
    </article>
  );
};

export default Kavithai;
