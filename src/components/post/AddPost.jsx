import React, { useEffect, useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/fireebase";
import { add } from "../../firebase/db";
import PostTitleInput from "./PostTitleInput";
import PostContentInput from "./PostContentInput";
import Status from "../elements/Status";
import Button from "../elements/Button";
import { useAuth } from "../../contexts/AuthContext";

const AddPost = ({ col }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [status, setStatus] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    userIsAdmin(currentUser);
  }, [currentUser]);

  const userIsAdmin = (user) => {
    import.meta.env.VITE_ADMIN_UID.split(",").forEach((uid) => {
      if (uid === user?.uid) setIsAdmin(true);
    });
  };

  const collectionRef = collection(db, col);
  const newPost = { title: newTitle, content: newContent, collection: col };

  const addPost = (e) => {
    e.preventDefault();
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
    isAdmin && (
      <form className="d-flex flex-column align-items-center">
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
        <Status status={status}></Status>
        <Button
          type="submit"
          value="post"
          className="btn btn-primary"
          onClick={(e) => addPost(e)}
        />
      </form>
    )
  );
};

export default AddPost;
