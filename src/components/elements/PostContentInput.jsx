import React from "react";

const PostContentInput = ({ postContent, setPostContent, col }) => {
  return (
    <>
      <label htmlFor="create-post-content">{col} content: </label>
      <textarea
        value={postContent}
        onChange={(e) => {
          setPostContent(e.target.value);
        }}
        name="create-post-content"
        id="create-post-content"
        className="post-content-input"
        rows="5"
        placeholder="type your content here"
      ></textarea>
    </>
  );
};

export default PostContentInput;
