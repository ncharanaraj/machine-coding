import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

export const useGetPosts = (page) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}?_limit=9&_page=${page}`);
        const data = await response.json();
        setPosts((prev) => [...prev, ...data]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, [page]);

  return { posts, loading, setLoading };
};
