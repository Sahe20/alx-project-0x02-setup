import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "What is Next.js?",
      content:
        "Next.js is a React framework that enables server-side rendering and static site generation.",
    },
    {
      title: "Why TypeScript?",
      content:
        "TypeScript brings static typing to JavaScript, making your code more robust and easier to maintain.",
    },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (

    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Pages Home Page</h1>

      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add Post
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;

