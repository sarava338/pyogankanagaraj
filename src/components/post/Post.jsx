import React, { useState } from "react";
import { remove, update } from "../../firebase/db";
import Button from "../elements/Button";

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
    <section className="fluid-container border p-2 my-2 d-flex flex-column flex-sm-row justify-content-between">
      <div>
        {!editable ? (
          <h3>{title}</h3>
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
      <div>
        <Button
          className="btn btn-primary"
          type="submit"
          value="edit"
          onClick={editPost}
        />
        <Button
          onClick={removePost}
          className={`btn ${deletable ? "btn-danger" : "btn-success"}`}
          value={deletable ? "delete" : "cancel deleting"}
        />
      </div>
    </section>
  );
};

export default Post;
