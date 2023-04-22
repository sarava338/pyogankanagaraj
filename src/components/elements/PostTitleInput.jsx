import React from "react";

const PostTitleInput = ({ postTitle, setPostTitle, col }) => {
  return (
    <>
      <label htmlFor="create-post-title">{col} title: </label>
      <input
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.target.value);
        }}
        type="text"
        name="create-post-title"
        id="create-post-title"
        className="post-title-input"
        placeholder="enter your title here"
      />
    </>
  );
};

export default PostTitleInput;
