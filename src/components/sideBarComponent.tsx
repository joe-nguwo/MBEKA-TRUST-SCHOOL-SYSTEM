import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";

function AppSideBar(){
    return(
        <Sidebar>
            <SidebarHeader></SidebarHeader>
            <SidebarContent>
                <SidebarGroup></SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
        </Sidebar>

    )
}

export default AppSideBar