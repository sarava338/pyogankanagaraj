import React from "react";
import AllPosts from "../components/post/AllPosts";

const Katturai = () => {
  return (
    <article className="katturai">
      <h1>Katturai</h1>
      <section className="katturai-posts">
        <AllPosts col='katturaigal'/>
      </section>
    </article>
  );
};

export default Katturai;
