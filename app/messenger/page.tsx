import Chat from "../ui/Chat";
import Sidebar from "../ui/Sidebar";

export default function Messenger() {
  return (
    <main className="w-full  rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
      <Sidebar />
      <Chat />
    </main>
  );
}
