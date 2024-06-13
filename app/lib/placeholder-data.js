const Users = [
  {
    _id: "user1",
    username: "john_doe",
    email: "john@example.com",
    passwordHash: "hashedpassword1",
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    _id: "user2",
    username: "jane_smith",
    email: "jane@example.com",
    passwordHash: "hashedpassword2",
    createdAt: "2023-01-02T00:00:00Z",
    updatedAt: "2023-01-02T00:00:00Z",
  },
  {
    _id: "user3",
    username: "alice_jones",
    email: "alice@example.com",
    passwordHash: "hashedpassword3",
    createdAt: "2023-01-03T00:00:00Z",
    updatedAt: "2023-01-03T00:00:00Z",
  },
];

const UserStatus = [
  {
    userId: "user1",
    isOnline: true,
    lastSeen: "2023-06-12T12:00:00Z",
    lastOnline: "2023-06-12T11:50:00Z",
  },
  {
    userId: "user2",
    isOnline: false,
    lastSeen: "2023-06-12T11:30:00Z",
    lastOnline: "2023-06-12T11:20:00Z",
  },
  {
    userId: "user3",
    isOnline: false,
    lastSeen: "2023-06-12T10:00:00Z",
    lastOnline: "2023-06-12T09:50:00Z",
  },
];

const Contacts = [
  {
    userId: "user1",
    contactId: "user2",
    status: "accepted",
    createdAt: "2023-01-05T00:00:00Z",
  },
  {
    userId: "user1",
    contactId: "user3",
    status: "accepted",
    createdAt: "2023-01-06T00:00:00Z",
  },
  {
    userId: "user2",
    contactId: "user3",
    status: "pending",
    createdAt: "2023-01-07T00:00:00Z",
  },
];

const Chats = [
  {
    _id: "chat1",
    message: "Hello, how are you?",
    senderId: "user1",
    chatType: "direct",
    groupId: null,
    createdAt: "2023-06-12T12:00:00Z",
  },
  {
    _id: "chat2",
    message: "I'm good, thanks!",
    senderId: "user2",
    chatType: "direct",
    groupId: null,
    createdAt: "2023-06-12T12:01:00Z",
  },
  {
    _id: "chat3",
    message: "Hey everyone!",
    senderId: "user3",
    chatType: "group",
    groupId: "group1",
    createdAt: "2023-06-12T12:05:00Z",
  },
];

const Groups = [
  {
    _id: "group1",
    groupName: "Developers",
    createdBy: "user1",
    createdAt: "2023-01-10T00:00:00Z",
  },
];

const GroupMembers = [
  {
    groupId: "group1",
    userId: "user1",
    role: "admin",
    joinedAt: "2023-01-10T00:00:00Z",
  },
  {
    groupId: "group1",
    userId: "user2",
    role: "member",
    joinedAt: "2023-01-11T00:00:00Z",
  },
  {
    groupId: "group1",
    userId: "user3",
    role: "member",
    joinedAt: "2023-01-12T00:00:00Z",
  },
];

const ChatParticipants = [
  {
    chatId: "chat1",
    userId: "user1",
  },
  {
    chatId: "chat1",
    userId: "user2",
  },
  {
    chatId: "chat2",
    userId: "user1",
  },
  {
    chatId: "chat2",
    userId: "user2",
  },
  {
    chatId: "chat3",
    userId: "user1",
  },
  {
    chatId: "chat3",
    userId: "user2",
  },
  {
    chatId: "chat3",
    userId: "user3",
  },
];

export {
  Users,
  UserStatus,
  Contacts,
  Chats,
  Groups,
  GroupMembers,
  ChatParticipants,
};
