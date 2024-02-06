import React, { useEffect, useState } from "react";
import { useGetPosts } from "../hooks/useGetPosts";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [page, setPage] = useState(1);
  const { posts, loading, setLoading } = useGetPosts(page);

  useEffect(() => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const onscroll = () => {
      if (window.innerHeight + scrollTop + 1 >= scrollHeight) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [setLoading]);

  return (
    <div className="pb-8">
      <h1 className="font-black text-8xl mb-8 text-center">Posts</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      {loading && (
        <div className="text-center my-8 text-blue-500 font-medium text-lg">
          Loading...
        </div>
      )}
    </div>
  );
};

export default Posts;
