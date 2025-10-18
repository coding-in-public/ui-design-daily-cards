import FilterAppSection from "./components/FilterAppSection";

export default async function Home() {
  const req = await fetch("http://localhost:4000/users");
  const data = await req.json();

  return (
    <main className="p-6 max-w-7xl mx-auto w-full text-slate-800 grid gap-3">
      <h1 className="text-3xl font-bold ">Users</h1>
      <FilterAppSection users={data} />
    </main>
  );
}
