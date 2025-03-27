"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/blog1.jpg", // Replace with actual image URLs
    title: "Best Newspaper For Matrimonial Ad: Top Choices for Maximum Response",
    blogURL: "Best Newspaper For Matrimonial Ad",
    category: "Print Advertising Agency",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 2,
    image: "/home-images/home-swiper1-img.jpeg", // Replace with actual image URLs
    title:
      "Best Radio Stations for Real Estate Advertising | Maximize Reach & Sales",
    blogURL: "Best Radio Stations for Real Estate Advertising",
    category: "Digital Marketing Agency",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
];

export default function ManageBlogs() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-20 bg-gray-100 min-h-screen">
      <div className="bg-gray-200 p-4 rounded-md shadow-md flex justify-between items-center">
        <h2 className="text-lg font-semibold">Manage Blogs</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Add Blog
        </button>
      </div>

      {/* Search & Category Filter */}
      <div className="mt-4 flex justify-between items-center">
        <select className="border p-2 rounded-md">
          <option value="">Select Category</option>
          <option value="print">Print Advertising</option>
          <option value="digital">Digital Marketing</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Blog Table */}
      <div className="mt-4 bg-white p-4 rounded-md shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-2">Image</th>
              <th className="p-2">Title</th>
              <th className="p-2">Blog URL</th>
              <th className="p-2">Category</th>
              <th className="p-2">Add Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr key={blog.id} className="border-b">
                <td className="p-2">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </td>
                <td className="p-2">{blog.title}</td>
                <td className="p-2">{blog.blogURL}</td>
                <td className="p-2">{blog.category}</td>
                <td className="p-2">{blog.addDate}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-md text-white ${
                      blog.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="p-2 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEye />
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <FaEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <button className="px-3 py-1 border rounded-md">1</button>
          <button className="px-3 py-1 border rounded-md">2</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
}
