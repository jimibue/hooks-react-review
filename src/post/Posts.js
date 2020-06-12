import React, { useState } from "react";
import DemoForm from "./DemoForm";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([newPost, ...posts]);
  }
  function editPost(newPost) {
    setPosts([newPost, ...posts]);
  }

  // no returns why? is this a good way to write this
  const renderPost = () =>
    posts.map((p) => <Post edit={editPost} key={p.id} {...p} />);

  return (
    <div>
      <h1>Posts</h1>
      <DemoForm add={addPost} />
      {renderPost()}
    </div>
  );
}
