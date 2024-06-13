import Image from "next/image";
import React from "react";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";

const Sidebar = () => {
  return (
    <section className=" h-full min-w-[320px] relative">
      <div className="p-3 border-b-2">
        {/* profile */}
        <div className="flex justify-between items-center ">
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
              className="p-[6px] bg-gray-1 rounded-full"
              size={30}
            />
          </div>
        </div>
        <span className="bg-gray-1 w-full flex items-center gap-2 mt-3 rounded-2xl px-2 py-2">
          <IoIosSearch size={18} color="gray" />
          <input
            type="text"
            placeholder="Search chats"
            className="bg-transparent text-gray-4 outline-none text-sm"
          />
        </span>
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
        {messages?.map((message) => (
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
      <div className="absolute w-full p-4 bottom-0 left-0 ">
        <div className="bg-dark text-gray-300 flex items-center gap-3 rounded-2xl text-sm  font-light px-2 py-3 cursor-pointer">
          <PiNotePencil size={16} className="ml-2" />
          Start a new chat
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

const messages = [
  {
    id: 1,
    name: "Ares Morgan",
    lastMessage: "Hello",
    lastMessageTime: "Just now",
    img: "/profile1.jpg",
    isActive: true,
  },
  {
    id: 2,
    name: "Alexandra Chang",
    lastMessage: "See you Saturday!",
    lastMessageTime: "2:36 pm",
    img: "/profile1.jpg",
    isActive: false,
  },
  {
    id: 3,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  ,
  {
    id: 4,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  ,
  {
    id: 5,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  ,
  {
    id: 6,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  {
    id: 7,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  {
    id: 8,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  ,
  {
    id: 9,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  ,
  {
    id: 10,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  {
    id: 10,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
  {
    id: 10,
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
];
