"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import ProfileSettings from "./ProfileSettings";
import { signOutAction } from "../lib/actions";
import Link from "next/link";
import { useDebouncedCallback } from "use-debounce";
import ChatListClient from "./ChatListClient";
import { Message, messages } from "../lib/placeholder-data";
import { fetchAllChats, fetchFilteredChats } from "../lib/data";

const Sidebar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [chats, setChats] = useState<Message[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllChats();
      setChats(res);
    };

    const filteredChats = async (query: string) => {
      try {
        const res = await fetchFilteredChats(query);
        setChats(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (!searchTerm) {
      fetchData();
    }
    if (searchTerm) {
      filteredChats(searchTerm);
    }
  }, [searchTerm]);

  const handleSearch = useDebouncedCallback((searchText: string) => {
    console.log(`Searching...${searchText}`);
    setSearchTerm(searchText);
  }, 300);

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
        {/* SEARCH */}
        <div className="bg-gray-1 w-full flex items-center gap-2 mt-3 rounded-2xl px-2 py-2">
          <IoIosSearch size={18} color="gray" />
          <input
            type="text"
            placeholder="Search chats"
            className="bg-transparent text-gray-4 outline-none text-sm"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      {/* buttons */}
      <div className="p-3 ">
        <div className="flex ">
          <div className="bg-gray-1 rounded-3xl p-1 flex-center gap-2">
            <button className="   px-2 py-1 rounded-3xl gap-2 flex-center bg-white ">
              <span className="text-sm text-dark">All</span>
              <span className="text-[10px] bg-gray-4 w-4 h-4 rounded-full flex-center text-white">
                {chats?.length}
              </span>
            </button>
            <button className="  bg-white px-2 py-1 rounded-3xl gap-2 flex-center ">
              <span className="text-sm text-dark">Friends</span>
              <span className="text-[10px] bg-gray-3 w-4 h-4 rounded-full flex-center text-white">
                7
              </span>
            </button>
            <button className="  bg-white px-2 py-1 rounded-3xl gap-2 flex-center">
              <span className="text-sm text-dark">Groups</span>
              <span className="text-[10px] bg-gray-3 w-4 h-4 rounded-full flex-center text-white">
                2
              </span>
            </button>
          </div>
        </div>
        {/* messagesss */}
      </div>
      <ChatListClient chats={chats} />
      <div className="absolute w-full p-4 bottom-0 left-0 flex  items-center justify-between gap-3">
        <Link
          href="/messenger/new-chat"
          className="bg-dark text-gray-300 w-full flex items-center gap-3 rounded-xl text-sm  font-light px-2 py-3 cursor-pointer"
        >
          <PiNotePencil size={16} className="ml-2" />
          Start a new chat
        </Link>
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
