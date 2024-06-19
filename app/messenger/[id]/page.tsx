import { chatData } from "@/app/lib/data";
import ChatBox from "@/app/ui/ChatBox";
import ChatInput from "@/app/ui/ChatInput";
import React from "react";

const page = () => {
  return (
    <div className=" h-full overflow-y-auto pr-1">
      {chatData.map((chat) => (
        <ChatBox
          key={chat.text}
          sender={chat.sender}
          text={chat.text}
          date={chat.date}
        />
      ))}

      <ChatInput />
    </div>
  );
};

export default page;
