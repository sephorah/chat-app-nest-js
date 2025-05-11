"use client";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { use } from "react";
import { TypographyMuted, TypographySmall } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import ChatroomHeader from "@/components/chatroom-header";

interface GroupMessagesProps {
  params: Promise<{ groupId: string }>;
}

const currentUserId = "seph-08";
const currentChatroom = "Tokyo trip";
const messages = [
  {
    id: 1,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "yesterday",
  },
  {
    id: 2,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "other-user",
    sentDate: "yesterday",
  },
  {
    id: 3,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "yesterday",
  },
  {
    id: 4,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "yesterday",
  },
  {
    id: 5,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "yesterday",
  },
  {
    id: 6,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
  },
  {
    id: 7,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "other-user",
    sentDate: "yesterday",
  },
  {
    id: 8,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "other-user",
    sentDate: "yesterday",
  },
  {
    id: 9,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "yesterday",
  },
  {
    id: 10,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "yesterday",
  },
  {
    id: 11,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "other-user",
    sentDate: "3 hours ago",
  },
  {
    id: 12,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "seph-08",
    sentDate: "3 hours ago",
  },
  {
    id: 13,
    content: "Hello, how has your day been? I hope you are doing well.",
    senderId: "other-user",
    sentDate: "2 hours ago",
  },
];

const GroupMessages = ({ params }: GroupMessagesProps) => {
  const { groupId } = use(params);

  return (
    <>
      <div className="flex flex-col h-screen">
        <ChatroomHeader chatroomName={currentChatroom} />
        <div className="flex flex-col overflow-y-auto px-4 py-2">
          <ChatMessageList className="h-2/3 bg-slate-300">
            {messages.map((message, e) => {
              const variant =
                message.senderId == currentUserId ? "sent" : "received";

              return (
                <ChatBubble variant={variant} key={e}>
                  <ChatBubbleAvatar
                    src="https://github.com/shadcn.png"
                    fallback="US"
                  />
                  <div className="flex flex-col space-y-1">
                    <ChatBubbleMessage
                      variant={variant}
                      className={`${
                        variant == "received" ? "bg-blue-300" : "bg-gray-200"
                      }`}
                    >
                      Hello, how has your day been? I hope you are doing well.
                    </ChatBubbleMessage>
                    <div
                      className={`flex ${
                        variant == "received"
                          ? "flex-row"
                          : "flex-row-reverse space-x-reverse"
                      } space-x-2`}
                    >
                      <TypographySmall>{message.senderId}</TypographySmall>
                      <TypographySmall>{message.sentDate}</TypographySmall>
                    </div>
                  </div>
                </ChatBubble>
              );
            })}
          </ChatMessageList>
        </div>

        <form className="flex flex-row space-x-2 mx-4 mb-4 mt-2 relative rounded-lg bg-background ">
          <ChatInput
            placeholder="Type your message here..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-1 bg-white hover:bg-gray-100 focus-within:ring-1 focus-within:ring-ring  "
          />
          <Button className="w-12 h-12  rounded-full bg-white self-center shadow hover:bg-gray-100 flex items-center justify-center">
            <Send className="w-5 h-5" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default GroupMessages;
