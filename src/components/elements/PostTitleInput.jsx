import React from "react";

const PostTitleInput = ({ postTitle, setPostTitle, col }) => {
  return (
    <div className="container my-2">
      <label htmlFor="post-title">{col} title: </label>
      <input
      className="w-100 p-3"
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.target.value);
        }}
        type="text"
        name="post-title"
        placeholder="enter your title here"
      />
    </div>
  );
};

export default PostTitleInput;
