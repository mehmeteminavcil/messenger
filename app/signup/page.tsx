import { Metadata } from "next";
import Signup from "../ui/Signup";

export const metadata: Metadata = {
  title: "Sign up",
};

const page = () => {
  return (
    <section className="w-full p-3 items-center justify-center rounded-3xl bg-white border border-gray max-w-[1240px] flex h-full overflow-hidden">
      <Signup />
    </section>
  );
};

export default page;
