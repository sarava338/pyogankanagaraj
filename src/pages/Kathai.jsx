import React, { useEffect, useState } from "react";
import Post from "../components/post/Post";
import { getPosts } from "../firebase/db";
import { collection } from "firebase/firestore";
import { db } from "../../fireebase";

const Kathai = () => {
  const [kathaigal, setKathaigal] = useState([]);

  const kathaiRef = collection(db, "kathai");

  useEffect(() => {
    getPosts(kathaiRef) 
    .then(data => {
      console.log(data)
    })
  }, []);

  return (
    <article className="kathai">
      <h1>Kathai</h1>
      <section className="kathai-posts">
        <Post />
      </section>
    </article>
  );
};

export default Kathai;
