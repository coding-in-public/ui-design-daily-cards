import FilterApp from "./components/FilterApp";

export default async function Home() {
  const req = await fetch("http://localhost:4000/users");
  const data = await req.json();

  return (
    <main className="w-full grid gap-4 p-8 justify-content-center">
      <h1 className="text-2xl font-bold">Users</h1>
      <FilterApp users={data} />
    </main>
  );
}
