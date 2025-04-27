import Image from "next/image";

export interface ChatroomIconProps {
  src: string;
  chatroomName: string;
}

export const ChatroomIcon = ({ src, chatroomName }: ChatroomIconProps) => {
  return (
    <Image
      src={src}
      width={50}
      height={50}
      className="rounded-full"
      alt={`Chat icon for ${chatroomName} chatroom`}
    />
  );
};
