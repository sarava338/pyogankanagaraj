import React, { useState } from "react";
import "./post.css";
import { remove, update } from "../../firebase/db";

const Post = ({ post }) => {
  const { id, title, content, collection } = post;
  const [editable, setEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [deletable, setDeletable] = useState(true);

  const editPost = () => {
    let newPost = {
      ...post,
      title: editedTitle,
      content: editedContent,
    };
    if (editable) {
      update(id, newPost)
        .then((res) => setEditable(false))
        .catch((err) => alert(`Post not editable\nError:${err}`));
    } else setEditable(true);
  };

  const removePost = () => {
    let deleteTimeoutID;
    if (deletable) {
      deleteTimeoutID = setTimeout(() => {
        remove(id, collection)
          .then((res) => alert("post deleted successfully", res))
          .catch((err) => alert(`Post not deletable\nError : ${err}`));
      }, 5000);
      setDeletable(false);
    } else {
      clearTimeout(deleteTimeoutID);
      setDeletable(true);
    }
  };

  return (
    <section className="post">
      <img src="image" alt="image" className="post-image" />
      <div className="post-content">
        {!editable ? (
          <h2>{title}</h2>
        ) : (
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          ></input>
        )}
        {!editable ? (
          <p>{content}</p>
        ) : (
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
        )}
      </div>
      <button onClick={editPost}>edit</button>
      <button onClick={removePost}>
        {deletable ? "delete" : "cancel deleting"}
      </button>
    </section>
  );
};

export default Post;
