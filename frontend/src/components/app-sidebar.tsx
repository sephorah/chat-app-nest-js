import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  TypographyH3,
  TypographyLarge,
  TypographySmall,
} from "./ui/typography";
import { ChatroomIcon } from "./chatroom-icon";

const testChatrooms = [
  {
    chatroomName: "Study group",
    lastMessage: "Anna: no problem!",
    lastMessageDate: "5 min ago",
  },
  {
    chatroomName: "Charles",
    lastMessage: "You: box box",
    lastMessageDate: "30 min ago",
  },
  {
    chatroomName: "Tokyo trip",
    lastMessage: "You: totalement",
    lastMessageDate: "2h ago",
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <TypographyH3 className="m-4"> Messages (5)</TypographyH3>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {testChatrooms.map((chatroom, index) => (
            <div
              key={index}
              className="border-0 flex items-center space-x-4 rounded-md p-4 hover:bg-blue-300"
            >
              <ChatroomIcon
                src="https://github.com/shadcn.png"
                chatroomName={chatroom.chatroomName}
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <TypographyLarge>{chatroom.chatroomName}</TypographyLarge>
                  <p className="self-center  text-xs font-medium leading-none">
                    {chatroom.lastMessageDate}
                  </p>
                </div>
                <TypographySmall>{chatroom.lastMessage}</TypographySmall>
              </div>
            </div>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
