import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{body}</p>
      <p className="text-sm text-gray-500 mt-4">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
