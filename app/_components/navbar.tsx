"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Briefcase, HomeIcon, Image } from "lucide-react";

export function Navbar({ className }: { className?: string }) {
  const navItems = [
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <Image className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
}
