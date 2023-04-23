import React from "react";

const PostContentInput = ({ postContent, setPostContent, col }) => {
  return (
    <div className="container my-2">
      <label htmlFor="post-content">{col} content: </label>
      <textarea
      className="w-100 p-3"
        value={postContent}
        onChange={(e) => {
          setPostContent(e.target.value);
        }}
        name="post-content"
        rows="5"
        placeholder="type your content here"
      ></textarea>
    </div>
  );
};

export default PostContentInput;
