import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection } from "firebase/firestore";
import { get } from "../../firebase/db";
import { db } from "../../firebase/fireebase";
import AuthProvider from "../../contexts/AuthContext";

const AllPosts = ({ col }) => {
  const [posts, setPosts] = useState([]);

  const collectionRef = collection(db, col);

  useEffect(() => {
    get(collectionRef).then((data) => {
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          collection: col,
        }))
      );
    });
  }, []);

  return (
    <AuthProvider>
      <section className="container">
        {posts && posts?.map((post) => <Post key={post.id} post={post} />)}
      </section>
    </AuthProvider>
  );
};

export default AllPosts;
