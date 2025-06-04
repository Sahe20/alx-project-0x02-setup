import Button from "@/components/common/Button";

const About = () => {
  return (
    
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">About Page</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
    
  );
};

export default About;
