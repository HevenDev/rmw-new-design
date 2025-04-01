"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    image: "/home-images/home-swiper1-img1.jpeg",
    title:
      "Best Newspaper For Matrimonial Ad: Top Choices for Maximum Response",
    blogURL: "Best Newspaper For Matrimonial Ad",
    category: "Print Advertising Agency",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 2,
    image: "/home-images/home-swiper1-img2.jpeg",
    title:
      "Best Radio Stations for Real Estate Advertising | Maximize Reach & Sales",
    blogURL: "Best Radio Stations for Real Estate Advertising",
    category: "Digital Marketing Agency",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 3,
    image: "/home-images/home-swiper1-img3.jpeg",
    title: "Best Real Estate Advertising Tips for Maximum Conversions",
    blogURL: "Best Real Estate Advertising Tips",
    category: "Digital Marketing Agency",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 4,
    image: "/home-images/home-swiper1-img4.jpeg",
    title: "How to Advertise on Social Media Effectively",
    blogURL: "Social Media Advertising Guide",
    category: "Social Media Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 5,
    image: "/home-images/home-swiper1-img5.jpeg",
    title: "Google Ads vs Facebook Ads: Which is Better?",
    blogURL: "Google Ads vs Facebook Ads",
    category: "PPC Advertising",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 6,
    image: "/home-images/home-swiper1-img6.jpeg",
    title: "SEO Strategies for Small Businesses in 2025",
    blogURL: "SEO Strategies for Small Businesses",
    category: "SEO & Digital Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 7,
    image: "/home-images/home-swiper1-img7.jpeg",
    title: "How to Create Viral Marketing Campaigns",
    blogURL: "Viral Marketing Strategies",
    category: "Growth Hacking",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 8,
    image: "/home-images/home-swiper1-img8.jpeg",
    title: "Top Content Marketing Trends for 2025",
    blogURL: "Content Marketing Trends",
    category: "Content Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 9,
    image: "/home-images/home-swiper1-img9.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 10,
    image: "/home-images/home-swiper1-img10.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 11,
    image: "/home-images/home-swiper1-img11.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 12,
    image: "/home-images/home-swiper1-img12.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 13,
    image: "/home-images/home-swiper1-img13.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 14,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },

  {
    id: 15,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 16,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 17,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 18,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 19,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 20,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 21,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 22,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 23,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 24,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 25,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
  {
    id: 26,
    image: "/home-images/home-swiper1-img2.jpeg",
    title: "Best Email Marketing Strategies to Boost Sales",
    blogURL: "Email Marketing Tips",
    category: "Email Marketing",
    addDate: "27 Mar, 2025",
    status: "Active",
  },
];

export default function ManageBlogs() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 15;
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const maxPageButtons = 3; // Only show 3 pages at a time

  // Calculate the first and last page to show in pagination
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="p-10 pl-20 bg-gray-100 min-h-screen">
      <div className="bg-black text-white p-4 rounded-md shadow-md flex justify-between items-center">
        <h2 className="text-lg font-semibold">Manage Blogs</h2>
        <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-blue-700">
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
        {/* Table for large screens */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black text-white">
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
              {currentBlogs.map((blog) => (
                <tr key={blog.id} className="border-b">
                  <td className="p-2">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={120}
                      height={120}
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
                        blog.status === "Active" ? "bg-green-500" : "bg-red-500"
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
          <div className="mt-6 flex justify-center space-x-2">
            {/* Previous Button */}
            <button
              className={`px-4 py-2 border rounded-md transition ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            >
              Previous
            </button>

            {/* Page Numbers (Sliding Window) */}
            {Array.from(
              { length: endPage - startPage + 1 },
              (_, i) => startPage + i
            ).map((page) => (
              <button
                key={page}
                className={`px-4 py-2 border rounded-md transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-300"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              className={`px-4 py-2 border rounded-md transition ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
            >
              Next
            </button>
          </div>
        </div>

        {/* Cards for small screens (Added without changing the existing table) */}
        <div className="block md:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-100 p-4 rounded-md shadow-md"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="rounded-md w-full"
            />
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-sm text-gray-600 truncate">{blog.blogURL}</p>
            <p className="text-sm text-gray-600">Category: {blog.category}</p>
            <p className="text-sm text-gray-600">Date: {blog.addDate}</p>
            <div className="flex justify-between items-center mt-2">
              <span
                className={`px-2 py-1 rounded-md text-white ${
                  blog.status === "Active" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {blog.status}
              </span>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <FaEye size={18} />
                </button>
                <button className="text-green-600 hover:text-green-800">
                  <FaEdit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        <button
          className={`px-4 py-2 border rounded-md transition ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-4 py-2 border rounded-md transition ${
              currentPage === page ? "bg-blue-600 text-white" : "hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={`px-4 py-2 border rounded-md transition ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        >
          Next
        </button>
      </div>
        </div>
      </div>
    </div>
  );
}
