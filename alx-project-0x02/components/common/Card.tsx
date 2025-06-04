import { type CardProps } from "@/interfaces";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
