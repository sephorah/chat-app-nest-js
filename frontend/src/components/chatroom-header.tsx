import { ChatroomIcon } from "./chatroom-icon";
import { TypographyLarge, TypographySmall } from "./ui/typography";

interface ChatroomHeaderProps {
  chatroomName: string;
};

const ChatroomHeader = ({ chatroomName }: ChatroomHeaderProps) => {
  return (
    <div className="bg-pink-400 mx-4 p-4 flex flex-row space-x-5">
      <ChatroomIcon
        src="https://github.com/shadcn.png"
        chatroomName={chatroomName}
      />
      <TypographyLarge className="self-center">{chatroomName}</TypographyLarge>
    </div>
  );
};

export default ChatroomHeader;
