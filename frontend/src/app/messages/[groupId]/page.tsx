"use client";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { use } from "react";

interface GroupMessagesParams {
  params: Promise<{ groupId: string }>;
}

const GroupMessages = ({ params }: GroupMessagesParams) => {
  const { groupId } = use(params);

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <ChatMessageList className="bg-slate-400">
            {[...Array(14)].map((_, e) => (
              <ChatBubble variant={e % 2 === 0 ? "sent" : "received"} key={e} className="bg-white rounded-2xl">
                <ChatBubbleAvatar fallback="US" />
                <ChatBubbleMessage variant={e % 2 === 0 ? "sent" : "received"}>
                  Hello, how has your day been? I hope you are doing well.
                </ChatBubbleMessage>
              </ChatBubble>
            ))}
          </ChatMessageList>
        </div>

        <div className="w-full px-4 pb-4">
          <ChatInput placeholder="Type your message here..." />
        </div>
      </div>
    </>
  );
};

export default GroupMessages;
