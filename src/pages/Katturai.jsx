import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";
import AuthProvider from "../contexts/AuthContext";

const Katturai = () => {
  return (
    <AuthProvider>
      <article>
        <h1 className="text-center mt-2">Katturai</h1>
        <section>
          <AddPost col="katturai" />
          <AllPosts col="katturai" />
        </section>
      </article>
    </AuthProvider>
  );
};

export default Katturai;
