import React from "react";

const PostTitleInput = ({ postTitle, setPostTitle, col }) => {
  return (
    <div>
      <label htmlFor="post-title">{col} title: </label>
      <input
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
