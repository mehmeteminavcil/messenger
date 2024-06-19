import Image from "next/image";
import React from "react";
import { getUsers } from "../lib/data";

const Users = async ({ email }: { email: string }) => {
  //   const users = await fetchFilteredUser(email);
  const users = await getUsers(email);

  return (
    <div className=" h-[80%]  mr-1  mt-5  flex flex-col gap-3">
      {users?.map((user) => (
        <>
          <div className="bg-white flex  p-2 gap-2 cursor-pointer rounded-lg hover:bg-slate-200 transition-all ">
            <div className="flex relative">
              <Image
                src="/profile1.jpg"
                alt={user.name}
                width={46}
                height={46}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-4 text-sm font-semibold">
                {user.name}
              </span>
            </div>
          </div>
        </>
      ))}
      {/* {users?.map((user) => (
        <Link href={user.id} key={user.id}>
          <div className="hover:bg-gray-2 flex  p-2 gap-2 cursor-pointer rounded-lg ">
            <div className="flex relative">
              <Image
                src={user.img}
                alt={user.name}
                width={46}
                height={46}
                className="rounded-full"
              />
              {user.isActive && (
                <span className="w-[10px] h-[10px] absolute bottom-[2px] right-[1px] rounded-full bg-green border border-white" />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-4 text-sm font-semibold">
                {user.name}
              </span>
            </div>
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default Users;
