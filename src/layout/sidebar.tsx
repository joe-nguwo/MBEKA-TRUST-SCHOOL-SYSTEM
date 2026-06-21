import { type ReactNode } from "react";
import { SidebarProvider,SidebarTrigger } from  "@/components/ui/sidebar";
import AppSideBar from "@/components/sideBarComponent";


function Sidebar({children}:{children:ReactNode}){

    return (
        <SidebarProvider>
            <AppSideBar/>
                <main className="w-full min-h-screen p-4">
                    <SidebarTrigger/>
                    {children}
                </main>
         
        </SidebarProvider>

    )
   
}

export default  Sidebar