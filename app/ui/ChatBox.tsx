import React from "react";
import { formatChatDate } from "../lib/utils";

const ChatBox = ({
  sender,
  text,
  date,
}: {
  sender: boolean;
  text: string;
  date: string;
}) => {
  return (
    <div
      className={`p-3  rounded-xl max-w-[50%] mt-4 ${
        sender ? "bg-blue ml-auto" : "bg-white"
      }`}
    >
      <p className={` text-sm ${sender ? "text-white" : "text-dark"}`}>
        {text}
      </p>
      <p
        className={` text-xs text-right ${
          sender ? "text-gray-2" : "text-dark"
        }`}
      >
        {formatChatDate(date)}
      </p>
    </div>
  );
};

export default ChatBox;
