"use client";
import { JSX, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const previous = scrollY.getPrevious() ?? 0;
      const direction = current - previous;

      // Always show in hero section (0-1080px)
      if (current < 160) {
        setVisible(true);
      } else {
        // After hero section, show on scroll up, hide on scroll down
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Floating Navbar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-3xl fixed top-4 md:top-8 lg:top-10 inset-x-0 mx-2 md:mx-auto border md:border-2 border-slate-200 rounded-full bg-white/80 backdrop-blur-2xl hover:shadow-xl shadow-lg md:shadow-2xl z-5000 px-4 md:px-6 lg:px-10 py-2 md:py-3 lg:py-4 items-center justify-between transition-all",
            className
          )}
        >
          {/* Logo on the left */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold bg-linear-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent hover:from-sky-700 hover:to-teal-600 transition-all"
          >
            VK
          </Link>

          {/* Nav Items in the center - Hidden on mobile/tablet */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative items-center flex space-x-2 text-slate-900 hover:text-slate-900 hover:bg-slate-100/50 px-6 py-2 rounded-full transition-all duration-200"
                )}
              >
                <span className="text-base font-semibold">{navItem.name}</span>
              </Link>
            ))}
          </div>

          {/* Hamburger button - Visible only on mobile/tablet */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-slate-700 hover:text-sky-600 transition-colors p-1 hover:bg-slate-100/50 rounded-full"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Social links on the right - Hidden on mobile/tablet */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/victorkang516"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-sky-600 transition-colors p-2 hover:bg-slate-100/50 rounded-full"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-kang-971823236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-sky-600 transition-colors p-2 hover:bg-slate-100/50 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-9998"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white/95 backdrop-blur-xl shadow-2xl z-9999 flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-sky-600 transition-colors p-2 hover:bg-slate-100/50 rounded-full"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col px-6 space-y-2">
                {navItems.map((navItem: any, idx: number) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-4 text-slate-900 hover:text-sky-600 hover:bg-slate-100/50 px-4 py-3 rounded-lg transition-all duration-200"
                  >
                    <span className="text-xl">{navItem.icon}</span>
                    <span className="text-base font-semibold">{navItem.name}</span>
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="my-6 px-6">
                <div className="border-t border-slate-200" />
              </div>

              {/* Social links */}
              <div className="px-6 space-y-2">
                <a
                  href="https://github.com/victorkang516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-900 hover:text-sky-600 hover:bg-slate-100/50 px-4 py-3 rounded-lg transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="text-base font-semibold">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/victor-kang-971823236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-900 hover:text-sky-600 hover:bg-slate-100/50 px-4 py-3 rounded-lg transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="text-base font-semibold">LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
