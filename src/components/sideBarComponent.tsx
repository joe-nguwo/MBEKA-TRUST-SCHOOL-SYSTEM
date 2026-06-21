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
            <SidebarHeader>Mbeka trust School</SidebarHeader>
            <SidebarContent>
                <SidebarGroup></SidebarGroup>
            </SidebarContent>
            <SidebarFooter></SidebarFooter>
            Log out
        </Sidebar>

    )
}

export default AppSideBar