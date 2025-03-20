"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";

import Link from "next/link";
import LogoutButton from "../logout/Logout";
import Image from "next/image";
type ProfileType = {
  email: string;
  name: string;
  createdAt: string;
  profileImage: string;
};
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  // const { theme } = useTheme();
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/profile")
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching profile data", error))
      .finally(() => setLoading(false));
  }, []);
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
      {/* Profile card */}
      <div
        className={cn(
          "flex items-center gap-3 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition rounded-md",
          expanded ? "justify-start" : "justify-center"
        )}
      >
        {loading ? (
        <p>...</p> // You can replace this with a spinner
      ) : (
        <Image
          src={profile?.profileImage || "/profile-images/img-2.webp"}
          alt="Profile"
          width={50}
          height={50}
          layout="fixed"
          className="rounded-full"
        />
      )}
      <div className="flex flex-col">
        {expanded && <span>{profile?.name}</span>}
        {expanded && <span>{profile?.email}</span>}
      </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        <Link href="/admin">
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
          {expanded && (
            <ChevronDown
              className={cn("w-4 h-4 transition", blogOpen ? "rotate-180" : "")}
            />
          )}
        </div>

        {/* Blog Submenu */}
        {expanded && blogOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="ml-8 space-y-2"
          >
            <Link href="/admin/add-blog">
              <div className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                Add Blog
              </div>
            </Link>
            <Link href="/admin/manage-blogs">
              <div className="p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                Manage Blogs
              </div>
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-3">
        <LogoutButton expanded={expanded} />
      </div>
    </motion.div>
  );
};

export default Sidebar;