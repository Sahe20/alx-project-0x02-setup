import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">Home Page</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="What is Next.js?"
          content="Next.js is a React framework that enables server-side rendering and static site generation."
        />
        <Card
          title="Why TypeScript?"
          content="TypeScript brings static typing to JavaScript, making your code more robust and easier to maintain."
        />
        <Card
          title="Why Tailwind CSS?"
          content="Tailwind is a utility-first CSS framework that lets you build modern designs quickly."
        />
      </div>
    </div>
  );
};

export default Home;
