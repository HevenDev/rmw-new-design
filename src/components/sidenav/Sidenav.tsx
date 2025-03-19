"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
// import { useTheme } from "next-themes";
import Link from "next/link";
import LogoutButton from "../logout/Logout";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  // const { theme } = useTheme();

  return (
    <motion.div
      className={cn(
        "h-screen bg-gray-100 dark:bg-gray-900 shadow-lg flex flex-col fixed top-0 left-0",
        expanded ? "w-64" : "w-20"
      )}
      animate={{ width: expanded ? 240 : 80 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Brand */}
      <div className="p-4 font-bold text-lg text-center dark:text-white">Brand</div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        <Link href="/dashboard">
          <div
            className={cn(
              "flex items-center gap-3 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition rounded-md",
              expanded ? "justify-start" : "justify-center"
            )}
          >
            <Home className="w-5 h-5" />
            {expanded && <span>Dashboard</span>}
          </div>
        </Link>

        {/* Blog with submenu */}
        <div
          onClick={() => setBlogOpen(!blogOpen)}
          className={cn(
            "flex items-center gap-3 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition rounded-md",
            expanded ? "justify-between" : "justify-center"
          )}
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5" />
            {expanded && <span>Blog</span>}
          </div>
          {expanded && <ChevronDown className={cn("w-4 h-4 transition", blogOpen ? "rotate-180" : "")} />}
        </div>

        {/* Blog Submenu */}
        {expanded && blogOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-8 space-y-2"
          >
            <Link href="/blog/posts">
              <div className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md cursor-pointer">Posts</div>
            </Link>
            <Link href="/blog/categories">
              <div className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md cursor-pointer">Categories</div>
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-3">
        <LogoutButton expanded={expanded}/>
      </div>
    </motion.div>
  );
};

export default Sidebar;
