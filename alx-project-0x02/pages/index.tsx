import Header from "@/components/layout/Header";
export default function Home() {
  return (
    <>
    <Header />
    <div>
      <main className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to ALX Project 2</h2>
        <p>This is a Next.js project using TypeScript and Tailwind CSS.</p>
      </main>
    </div>
    </>
  );
}
