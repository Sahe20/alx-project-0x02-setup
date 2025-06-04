import { UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Address:</strong> {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
