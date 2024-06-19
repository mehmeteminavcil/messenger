import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchFilteredChats } from "../lib/data";

export default async function ChatsList({ query }: { query: string }) {
  const chats = await fetchFilteredChats(query);

  return (
    <div className=" p-2 h-[72%] overflow-scroll mr-1  ">
      {chats?.map((message) => (
        <Link href={message.id} key={message.id}>
          <div className="hover:bg-gray-2 flex  p-2 gap-2 cursor-pointer rounded-lg ">
            <div className="flex relative">
              <Image
                src={message.img}
                alt={message.name}
                width={46}
                height={46}
                className="rounded-full"
              />
              {message.isActive && (
                <span className="w-[10px] h-[10px] absolute bottom-[2px] right-[1px] rounded-full bg-green border border-white" />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-4 text-sm font-semibold">
                {message.name}
              </span>
              <span className="text-xs text-gray-3 max-w-[160px] overflow-hidden whitespace-nowrap text-ellipsis">
                {message.lastMessage}{" "}
              </span>
            </div>
            <span className="text-xs text-gray-3 ml-auto">
              {message.lastMessageTime}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
