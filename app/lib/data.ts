import { sql } from "@vercel/postgres";
import { messages } from "./placeholder-data";

export type Users = {
  id: string;
  name: string;
  email: string;
};
export async function getUsers(email: string) {
  if (email === "") {
    return null;
  }
  try {
    const user = await sql<Users>`
    SELECT 
       *
    FROM users 
    WHERE
       users.name ILIKE ${`%${email}%`} OR
       users.email ILIKE ${`%${email}%`} 
        
    `;
    console.log(user.rows);
    return user.rows;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export async function fetchAllChats() {
  return messages;
}

export async function fetchFilteredChats(query: string) {
  const lowerCaseQuery = query.toLowerCase();
  return messages.filter(
    (message) =>
      message.name.toLowerCase().includes(lowerCaseQuery) ||
      message.lastMessage.toLowerCase().includes(lowerCaseQuery)
  );
}

interface ChatMessage {
  text: string;
  sender: boolean;
  date: string;
}

export const chatData: ChatMessage[] = [
  {
    text: "Hello there1!",
    sender: true,
    date: "2024-02-19T15:30:00Z",
  },
  {
    text: "Hi! How can I help you?",
    sender: false,
    date: "2024-02-19T15:31:00Z",
  },
  {
    text: "I have a question about your product.",
    sender: true,
    date: "2024-03-19T15:32:00Z",
  },
  {
    text: "Sure, feel free to ask!",
    sender: false,
    date: "2024-04-19T15:33:00Z",
  },
  {
    text: "I have a question about your product.",
    sender: true,
    date: "2024-05-19T15:32:00Z",
  },
  {
    text: "Sure, feel free to ask!",
    sender: false,
    date: "2024-06-19T15:33:00Z",
  },
  {
    text: "I have a question about your product.",
    sender: true,
    date: "2024-06-19T15:32:00Z",
  },
  {
    text: "Sure, feel free to ask!",
    sender: false,
    date: "2024-06-19T15:33:00Z",
  },
  {
    text: "I have a question about your product.",
    sender: true,
    date: "2024-06-19T15:32:00Z",
  },
  {
    text: "Sure, feel free to ask!",
    sender: false,
    date: "2024-06-19T15:33:00Z",
  },
];
