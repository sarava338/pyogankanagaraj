import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";
import AuthProvider from "../contexts/AuthContext";

const Kathai = () => {
  return (
    <AuthProvider>
      <article>
        <h1 className="text-center mt-2">Kathai</h1>
        <section>
          <AddPost col="kathai" />
          <AllPosts col="kathai" />
        </section>
      </article>
    </AuthProvider>
  );
};

export default Kathai;
