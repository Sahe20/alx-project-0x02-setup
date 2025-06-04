import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">My Next.js Project</h1>
      <nav className="flex justify-center space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">Page: Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
};

export default Header;
