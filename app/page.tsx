import Login from "./ui/Login";
import Sidebar from "./ui/Sidebar";

export default function Home() {
  return (
    <main className="w-full  rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
      <section className="w-full p-3 items-center justify-center rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
        <Login />
      </section>
    </main>
  );
}
