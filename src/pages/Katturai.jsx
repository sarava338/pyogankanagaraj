import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";

const Katturai = () => {
  return (
    <article>
      <h1>Katturai</h1>
      <section>
        <AddPost col="katturai" />
        <AllPosts col="katturai" />
      </section>
    </article>
  );
};

export default Katturai;
