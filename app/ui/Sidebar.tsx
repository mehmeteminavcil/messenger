"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import Search from "./Search";
import { messages } from "../lib/placeholder-data";
import ProfileSettings from "./ProfileSettings";
import { signOutAction } from "../lib/actions";

const Sidebar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <section className=" h-full min-w-[320px] relative">
      <div
        className="p-3 border-b-2"
        onMouseLeave={() => setSettingsOpen(false)}
      >
        {/* profile */}
        <div className="flex justify-between items-center relative ">
          <Image
            src="/profile1.jpg"
            height={50}
            width={50}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex gap-2">
            <IoMdNotificationsOutline
              color="gray "
              className="p-[6px] bg-gray-1 rounded-full"
              size={30}
            />
            <BsThreeDotsVertical
              color="gray "
              className="p-[6px] bg-gray-1 rounded-full cursor-pointer"
              size={30}
              onClick={() => setSettingsOpen((prev) => !prev)}
            />

            {settingsOpen && (
              <ProfileSettings handleSignOut={() => signOutAction()} />
            )}
          </div>
        </div>
        <Search />
      </div>
      {/* buttons */}
      <div className="p-3 ">
        <div className="flex ">
          <div className="bg-gray-1 rounded-3xl p-1 flex-center gap-2">
            <button className="  bg-white px-2 py-1 rounded-3xl gap-2 flex-center">
              <span className="text-sm text-dark">All</span>
              <span className="text-[10px] bg-gray-4 w-4 h-4 rounded-full flex-center text-white">
                9
              </span>
            </button>
            <button className="  bg-white px-2 py-1 rounded-3xl gap-2 flex-center ">
              <span className="text-sm text-dark">Friends</span>
              <span className="text-[10px] bg-gray-4 w-4 h-4 rounded-full flex-center text-white">
                7
              </span>
            </button>
            <button className="  bg-white px-2 py-1 rounded-3xl gap-2 flex-center">
              <span className="text-sm text-dark">Groups</span>
              <span className="text-[10px] bg-gray-4 w-4 h-4 rounded-full flex-center text-white">
                2
              </span>
            </button>
          </div>
        </div>
        {/* messagesss */}
      </div>
      <div className=" p-2 h-[72%] overflow-scroll mr-1  ">
        {messages.map((message) => (
          <div
            key={message.id}
            className="hover:bg-gray-2 flex  p-2 gap-2 cursor-pointer rounded-lg "
          >
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
        ))}
      </div>
      <div className="absolute w-full p-4 bottom-0 left-0 flex  items-center justify-between gap-3">
        <div className="bg-dark text-gray-300 w-full flex items-center gap-3 rounded-xl text-sm  font-light px-2 py-3 cursor-pointer">
          <PiNotePencil size={16} className="ml-2" />
          Start a new chat
        </div>
        {/* <IoSettingsOutline
          size={44}
          className=" bg-gray-3/80 px-3  text-white  rounded-xl cursor-pointer"
        /> */}
      </div>
      <div></div>
    </section>
  );
};

export default Sidebar;
