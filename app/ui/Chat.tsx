import React from "react";
import ChatInput from "./ChatInput";
import ChatBox from "./ChatBox";

const Chat = () => {
  return (
    <section className=" h-full flex-1 rounded-3xl py-3 pr-3 ">
      <div className="bg-gray-2 h-full rounded-3xl p-3 relative">
        test
        <ChatBox />
        <ChatInput />
      </div>
    </section>
  );
};

export default Chat;
