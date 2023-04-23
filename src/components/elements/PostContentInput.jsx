import React from "react";

const PostContentInput = ({ postContent, setPostContent, col }) => {
  return (
    <div>
      <label htmlFor="post-content">{col} content: </label>
      <textarea
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
