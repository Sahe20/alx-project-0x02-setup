import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">User Directory</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

// Fetch user data statically
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
export default Users;