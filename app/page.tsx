import Sidebar from "./ui/Sidebar";

export default function Home() {
  return (
    <main className="w-full  rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
      <Sidebar />
      <section className=" h-full flex-1 rounded-3xl py-3 pr-3 ">
        <div className="bg-gray-2 h-full rounded-3xl p-3 ">test</div>
      </section>
    </main>
  );
}
