import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { PiSticker } from "react-icons/pi";

const ChatInput = () => {
  return (
    <div className="absolute w-full p-3 bottom-0 left-0">
      <form className="flex items-center w-full gap-2">
        <GoPlus
          color="gray"
          size={36}
          className="bg-gray-3/25 rounded-full cursor-pointer p-2 "
        />
        <div className="w-full items-center flex rounded-xl py-2 px-3 gap-3 bg-white">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full  text-sm outline-none bg-transparent text-dark "
          />
          <CiFaceSmile color="gray" size={26} className="cursor-pointer" />
          <PiSticker color="gray" size={26} className="cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
