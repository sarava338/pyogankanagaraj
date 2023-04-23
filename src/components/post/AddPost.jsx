import React, { useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/fireebase";
import { add } from "../../firebase/db";
import PostTitleInput from "../elements/PostTitleInput";
import PostContentInput from "../elements/PostContentInput";
import Status from "../elements/Status";

const AddPost = ({ col }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [status, setStatus] = useState({});

  const collectionRef = collection(db, col);
  const newPost = { title: newTitle, content: newContent, collection: col };

  const addPost = (e) => {
    e.preventDefault();
    setStatus("");
    if (newTitle && newContent) {
      add(collectionRef, newPost)
        .then((res) => {
          setStatus({
            messege: "post created successfully",
            code: true,
          });
          setTimeout(() => setStatus({}), 3000);
        })
        .catch((err) => {
          setStatus({
            messege: "post not created. Kindly check the error in console",
            code: false,
          });
          console.log(err);
        });
      setNewTitle("");
      setNewContent("");
    } else
      setStatus({ messege: "Kindly type something and post", code: false });
  };

  return (
    <form>
      <PostTitleInput
        postTitle={newTitle}
        setPostTitle={setNewTitle}
        col={col}
      />
      <PostContentInput
        postContent={newContent}
        setPostContent={setNewContent}
        col={col}
      />
      <div>
        {status && <Status status={status}></Status>}
      </div>

      <button
        onClick={(e) => {
          addPost(e);
        }}
      >
        Post
      </button>
    </form>
  );
};

export default AddPost;
