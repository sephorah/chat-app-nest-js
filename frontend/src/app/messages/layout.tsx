import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const MessagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="bg-pink-200 w-full min-h-screen">
        {children}
      </div>
    </SidebarProvider>
  );
};

export default MessagesLayout;
