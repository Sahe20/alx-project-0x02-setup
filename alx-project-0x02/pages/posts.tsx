import { useEffect, useState } from "react";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Recent Posts</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;
