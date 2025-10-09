import { useState, useEffect } from "react";
import { getPosts } from "../../api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();
      setPosts(response["posts"]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <br />
      <h2>게시글 목록</h2>
      {posts.map((post) => {
        return <li key={post["id"]}>{post["title"]}</li>;
      })}
    </div>
  );
}
