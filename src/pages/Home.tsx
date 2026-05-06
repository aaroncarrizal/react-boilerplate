import Counter from "../components/Counter";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-foreground mb-4">Welcome Home</h1>
      <p className="text-muted-foreground mb-8">
        This is the home page of your new React app.
      </p>
      <Counter />
    </div>
  );
}

export default Home;
