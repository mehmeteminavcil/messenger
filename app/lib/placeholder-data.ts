export type Message = {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  img: string;
  isActive: boolean;
};
export const messages = [
  {
    id: "1",
    name: "Ares Morgan",
    lastMessage: "Hello",
    lastMessageTime: "Just now",
    img: "/profile1.jpg",
    isActive: true,
  },
  {
    id: "2",
    name: "Alexandra Chang",
    lastMessage: "See you Saturday!",
    lastMessageTime: "2:36 pm",
    img: "/profile1.jpg",
    isActive: false,
  },
  {
    id: "3",
    name: "Ares Morgan",
    lastMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quasi.",
    lastMessageTime: "Yesterday",
    img: "/profile1.jpg",
    isActive: true,
  },
];
