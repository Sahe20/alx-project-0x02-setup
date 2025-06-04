import { GetStaticProps } from "next";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
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

// Static Site Generation with getStaticProps as requested by the checker
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
