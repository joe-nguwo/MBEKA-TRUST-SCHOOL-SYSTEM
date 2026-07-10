import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/components/sideBarComponent";

function SidebarLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        < AppSideBar />

        <main className="flex-1 p-4">
          <SidebarTrigger />

          <div className="py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default SidebarLayout;