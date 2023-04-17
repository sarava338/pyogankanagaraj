import React, { useState } from "react";
import "./post.css";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/fireebase";
import { createPost } from "../../firebase/db";

const CreatePost = ({ col }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const collectionRef = collection(db, col);

  const addPost = () => {
    console.log(newTitle, newContent);
    createPost(collectionRef, { title: newTitle, content: newContent });
    document.getElementById("create-post-title").value = "";
    document.getElementById("create-post-content").value = "";
  };

  return (
    <section className="create-post">
      <input
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
        type="text"
        name="create-post-title"
        id="create-post-title"
        className="post-title-input"
        placeholder="enter your title here"
      />
      <textarea
        onChange={(e) => {
          setNewContent(e.target.value);
        }}
        name="create-post-content"
        id="create-post-content"
        className="post-content-input"
        rows="5"
        placeholder="type your content here"
      ></textarea>
      <button onClick={addPost} className="create-post-button">
        Post
      </button>
    </section>
  );
};

export default CreatePost;
