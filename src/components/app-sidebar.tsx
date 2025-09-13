"use client"

import {
  AudioWaveform,
  BriefcaseBusiness,
  Cog,
  Command,
  FileClock,
  FileText,
  GalleryVerticalEnd,
  LayoutDashboard,
  NotebookPen,
  School,
  ShoppingCart,
  Users
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavAdmin } from "./nav-admin"

// This is sample data.
const data = {
  user: {
    name: "Rama Aditya",
    email: "rama@klola.id",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
    {
      title: "myAssessment",
      url: "/my-assessment",
      icon: NotebookPen,
      isActive: false,
      items: [],
    },
    // {
    //   title: "myReport",
    //   url: "/my-report",
    //   icon: FileText,
    //   isActive: false,
    //   items: [],
    // },
    // {
    //   title: "Groups",
    //   url: "#",
    //   icon: Users,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "Langganan",
    //       url: "/",
    //     },
    //     {
    //       title: "Riwayat",
    //       url: "/member/history",
    //     },
    //   ],
    // },
  ],
  navAdmin: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
    {
      title: "Competency",
      url: "#",
      icon: BriefcaseBusiness,
      isActive: true,
      items: [
        {
          title: "Report",
          url: "/office/competency/report",
        },
        {
          title: "Assessment",
          url: "/office/competency/assessment",
        },
        {
          title: "Data",
          url: "/office/competency/data",
        },
        {
          title: "Questionnaire",
          url: "/office/competency/questionnaire",
        },
      ],
    },
    // {
    //   title: "Training Development",
    //   url: "#",
    //   icon: School,
    //   isActive: false,
    //   items: [
    //     {
    //       title: "Coming Soon",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Configuration",
    //   url: "#",
    //   icon: Cog,
    //   isActive: false,
    //   items: [
    //     {
    //       title: "User Management",
    //       url: "/",
    //     },
    //     {
    //       title: "Notification",
    //       url: "/",
    //     },
    //     {
    //       title: "Information",
    //       url: "/",
    //     },
    //   ],
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAdmin items={data.navAdmin} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
