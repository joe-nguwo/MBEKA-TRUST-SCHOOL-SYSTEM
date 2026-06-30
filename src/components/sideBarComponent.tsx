import { Home, Settings, Users, HelpCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const items: NavItem[] = [
  { title: "Dashbaord", url: "/auth/dashboard", icon: Home },
  { title: "Students", url: "auth/students", icon: Users },
  { title: "Books", url: "/auth/books", icon: Settings },
  { title: "Help", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Mbeka School</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>NavLinks</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;