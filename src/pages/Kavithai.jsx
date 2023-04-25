import React from "react";
import AllPosts from "../components/post/AllPosts";
import AddPost from "../components/post/AddPost";
import AuthProvider from "../contexts/AuthContext";

const Kavithai = () => {
  return (
    <AuthProvider>
      <article>
        <h1 className="text-center mt-2">Kavithai</h1>
        <section>
          <AddPost col="kavithai" />
          <AllPosts col="kavithai" />
        </section>
      </article>
    </AuthProvider>
  );
};

export default Kavithai;
