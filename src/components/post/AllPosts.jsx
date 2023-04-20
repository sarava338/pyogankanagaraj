import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection } from "firebase/firestore";
import { getPosts } from "../../firebase/db";
import { db } from "../../firebase/fireebase";

const AllPosts = ({ col }) => {
  const [posts, setPosts] = useState([]);

  const collectionRef = collection(db, col);

  useEffect(() => {
    getPosts(collectionRef).then((data) => {
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return !posts?.length ? (
    <h1>Loading....</h1>
  ) : (
    posts?.map((post) => <Post key={post.id} post={post} />)
  );

};

export default AllPosts;
