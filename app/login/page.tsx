import { Metadata } from "next";
import Login from "../ui/Login";

export const metadata: Metadata = {
  title: "Login",
};

const page = () => {
  return (
    <section className="w-full p-3 items-center justify-center rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
      <Login />
    </section>
  );
};

export default page;
