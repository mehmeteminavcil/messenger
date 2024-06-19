import React from "react";
import Sidebar from "../ui/Sidebar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="w-full  rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
      <Sidebar />
      <section className=" h-full flex-1 rounded-3xl py-3 pr-3 ">
        <div className="bg-gray-2 h-full rounded-3xl p-3 relative">
          {children}
        </div>
      </section>
    </main>
  );
};

export default layout;
