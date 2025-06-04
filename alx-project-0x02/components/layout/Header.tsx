import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const linkClasses = (path: string) =>
    `text-white px-4 py-2 rounded-md transition ${
      router.pathname === path ? "bg-blue-700" : "hover:bg-blue-600"
    }`;

  return (
    <header className="bg-blue-800 text-white py-4 px-6 shadow-md">
      <h1 className="text-xl font-bold">My Next.js Project</h1>
      <nav className="flex justify-center space-x-6">
        <Link href="/" className={linkClasses("/")}>Home</Link>
        <Link href="/home" className={linkClasses("/home")}>Pages Home</Link>
        <Link href="/about" className={linkClasses("/about")}>About</Link>
        <Link href="/posts" className={linkClasses("/posts")}>Posts</Link>
        <Link href="/users" className={linkClasses("/users")}>Users</Link>
      </nav>
    </header>
  );
};

export default Header;
