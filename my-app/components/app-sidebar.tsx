"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Building,
  Building2,
  Command,
  Frame,
  GalleryVerticalEnd,
  HomeIcon,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  University,
  Users2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Universidades",
      url: "#",
      icon: Building2,
      isActive: true,
      items: [
        {
          title: "Cadastrar",
          url: "/university/new",
        },
        {
          title: "Listar",
          url: "/university",
        },
      ],
    },
    {
      title: "Estudantes",
      url: "#",
      icon: Users2,
      isActive: true,
      items: [
        {
          title: "Cadastrar",
          url: "/student/new",
        },
        {
          title: "Listar",
          url: "/student",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <HomeIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Página Inicial</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
