import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";

const Katturai = () => {
  return (
    <article className="katturai">
      <h1>Katturai</h1>
      <section className="katturai-posts">
        <AddPost col="katturai" />
        <AllPosts col="katturai" />
      </section>
    </article>
  );
};

export default Katturai;
