import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./Posts/postSlice";

const PostView = () => {
  const dispatch = useDispatch();

  const { isLoading, error, posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  });

  return (
    <div>
      <h2>Posts</h2>
      {isLoading && <h3>Loading</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts &&
          posts.map((post) => (
            <article key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </article>
          ))}
      </section>
    </div>
  );
};

export default PostView;
