import { Icons } from "@/components/icons";
import { IconBrandCss3, IconBrandGolang, IconBrandGoogle, IconBrandHtml5, IconBrandJavascript, IconBrandLaravel, IconBrandNextjs, IconBrandReact, IconBrandSupabase, IconBrandTailwind, IconBrandTypescript, IconBrandVercel, IconPrompt, IconSitemap } from "@tabler/icons-react";
import { HomeIcon } from "lucide-react";

export const DATA: any = {
  name: "ßécanee",
  initials: "ßé",
  url: "https://becaneee.xyz",
  location: "Jakarta, ID",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: ["Fullstack Developer", "Freelancer", "n8n Automation"],
  summary:
    "Hi, I'm ßécanee a freelance developer from Indonesia. I love building things and helping people and work on various projects, from simple websites to complex web apps, and I enjoy the variety of challenges each project offers. When I'm not coding, I'm traveling and exploring the internet, seeking inspiration in every corner.",
  avatarUrl: "/me.jpg",
  skills: [
    {
      name: "Next.js",
      icon: IconBrandNextjs,
    },
    {
      name: "React.js",
      icon: IconBrandReact,
    },
    {
      name: "Laravel",
      icon: IconBrandLaravel,
    },
    {
      name: "Golang",
      icon: IconBrandGolang,
    },
    {
      name: "Typescript",
      icon: IconBrandTypescript,
    },
    {
      name: "Tailwind CSS",
      icon: IconBrandTailwind,
    },
    {
      name: "Supabase",
      icon: IconBrandSupabase,
    },
    {
      name: "Vercel",
      icon: IconBrandVercel,
    },
    {
      name: "Google Console",
      icon: IconBrandGoogle,
    },
    {
      name: "HTML",
      icon: IconBrandHtml5,
    },
    {
      name: "CSS",
      icon: IconBrandCss3,
    },
    {
      name: "Javascript",
      icon: IconBrandJavascript,
    },
    {
      name: "n8n",
      icon: IconSitemap,
    },
    {
      name: "Prompt Engineering",
      icon: IconPrompt,
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/projects", icon: HomeIcon, label: "Projects" },
  ],
  contact: {
    email: "me@becaneee.xyz",
    tel: "+6281932709954",
    social: {
      // n8nTemplates: {
      //   name: "n8n Templates",
      //   url: "https://n8n.becaneee.xyz",
      //   icon: Icons.n8n,
      //   navbar: true,
      // },
      // restAPI: {
      //   name: "Rest API",
      //   url: "https://api.becaneee.xyz",
      //   icon: Icons.restAPI,
      //   navbar: true,
      // },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],

  journey: [
    {
      school: "Hacktive8",
      badge: "WAVE 4",
      href: "https://www.hacktiv8.com",
      degree: "AI for Data Scientist",
      logoUrl: "/knowladges/hacktiv8.png",
      start: "2025",
      end: "",
    },
    {
      school: "Hacktive8",
      badge: "WAVE 3",
      href: "https://www.hacktiv8.com",
      degree: "AI for IT Developer",
      logoUrl: "/knowladges/hacktiv8.png",
      start: "2025",
      end: "",
    },
    {
      school: "Indonesia AI",
      badge: "BATCH 2",
      href: "https://aiforindonesia.com",
      degree: "Natural Language Processing",
      logoUrl: "/knowladges/aiforindonesia.jpeg",
      start: "2023",
      end: "",
    },
    {
      school: "Hacktive8",
      badge: "BATCH 45",
      href: "https://www.hacktiv8.com",
      degree: "React and React Native",
      logoUrl: "/knowladges/hacktiv8.png",
      start: "2021",
      end: "",
    },
    {
      school: "Dumbways ID",
      badge: "BATCH 24",
      href: "https://dumbways.id",
      degree: "Fullstack Javascript Developer",
      logoUrl: "/knowladges/dumbways.png",
      start: "2021",
      end: "",
    },
    {
      school: "Buildwithangga",
      badge: "",
      href: "https://buildwithangga.com",
      degree: "Fullstack Laravel VueJS",
      logoUrl: "/knowladges/bwa.svg",
      start: "2020",
      end: "",
    },
    {
      school: "BNSP",
      badge: "",
      href: "https://bnsp.go.id",
      degree: "Multimedia Service",
      logoUrl: "/knowladges/bnsp.png",
      start: "2019",
      end: "",
    },
    {
      school: "LSPR",
      badge: "",
      href: "https://www.lspr.ac.id",
      degree: "Radio Announcement Competition",
      logoUrl: "/knowladges/lspr.png",
      start: "2018",
      end: "",
    },
  ],

  projects: [
    {
      title: "Tekno AI Subscription",
      href: "https://tekno.becaneee.xyz",
      dates: "August 2025",
      active: true,
      description:
        "Connect to premium service things together. Join this community of tech enthusiasts.",
      technologies: [
        "Next.js",
        "Supabase",
        "Google Console",
        "Whatsapp Gateway",
        "n8n",
      ],
      links: [
        {
          type: "Visit",
          href: "https://tekno.becaneee.xyz",

          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-tekno.png",
      video: "",
    },
    {
      title: "n8n Templates",
      href: "https://n8n.becaneee.xyz",
      dates: "June 2025",
      active: true,
      description:
        "Discover n8n workflow templates for your business needs.",
      technologies: [
        "n8n",
        "AI Agent",
      ],
      links: [
        {
          type: "Visit",
          href: "https://n8n.becaneee.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-n8n.png",
      video: "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: false,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],

} as const;
