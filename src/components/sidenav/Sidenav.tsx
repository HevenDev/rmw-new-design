"use client";

import { useEffect, useState } from "react";
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
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(true);
  const [blogOpen, setBlogOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/api/profile")
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching profile data", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="h-screen w-64 bg-gray-100 dark:bg-gray-900 shadow-lg flex flex-col fixed top-0 left-0">
      {/* Profile card */}
      <div className="flex items-center gap-3 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition rounded-md">
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
          <span>{profile?.name}</span>
          <span>{profile?.email}</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4">
        <Link href="/admin">
          <div className="flex items-center gap-3 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition rounded-md">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </div>
        </Link>

        {/* Blog with submenu */}
        <div
          onClick={() => setBlogOpen(!blogOpen)}
          className="flex items-center gap-3 p-3 hover:bg-gray-300 dark:hover:bg-gray-700 cursor-pointer transition rounded-md justify-between"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5" />
            <span>Blog</span>
          </div>
          <ChevronDown className={cn("w-4 h-4 transition", blogOpen ? "rotate-180" : "")} />
        </div>

        {/* Blog Submenu */}
        {blogOpen && (
          <div className="ml-8 space-y-2">
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
          </div>
        )}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-3">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
