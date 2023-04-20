import React, { useState } from "react";
import "./post.css";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/fireebase";
import { add } from "../../firebase/db";

const AddPost = ({ col }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [show, setShow] = useState(false);
  const [addPostStatus, setAddPostStatus] = useState("hide");

  const collectionRef = collection(db, col);

  const showPostStatus = (postID) => {
    if (postID) {
      setAddPostStatus("success");
      setTimeout(() => {
        setAddPostStatus("hide");
      }, 3000);
    } else {
      setAddPostStatus("error");
      setTimeout(() => {
        setAddPostStatus("hide");
      }, 3000);
    }
  };

  const addPost = (e) => {
    e.preventDefault();
    if (newTitle && newContent) {
      setShow(false);
      add(collectionRef, {
        title: newTitle,
        content: newContent,
        collection: col,
      }).then((res) => {
        showPostStatus(res.id);
      });
      document.getElementById("create-post-title").value = "";
      document.getElementById("create-post-content").value = "";
    } else setShow(true);
  };

  return (
    <form className="create-post">
      <label htmlFor="create-post-title">
        {col.substring(0, col.length - 3)} title:{" "}
      </label>
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
      <label htmlFor="create-post-content">
        {col.substring(0, col.length - 3)} content:{" "}
      </label>
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

      <div className="status">
        {show && <p className="error">Kindly type something and post</p>}
        {addPostStatus === "success" && (
          <p className="success">post was created successfully</p>
        )}
        {addPostStatus === "error" && (
          <p className="error">post was not created</p>
        )}
      </div>

      <button
        onClick={(e) => {
          addPost(e);
        }}
        className="create-post-button"
      >
        Post
      </button>
    </form>
  );
};

export default AddPost;
