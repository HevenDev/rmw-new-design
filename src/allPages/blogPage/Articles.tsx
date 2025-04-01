"use client";

import Loader from "@/components/loader/Loader";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// interface Article {
//   imageSrc: string;
//   date: string;
//   minutesRead: string;
//   title: string;
//   description: string;
// }

const blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]); // State to store blogs
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/all_blogs");
        setBlogs(response.data); // Store API response
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Type-safe error handling
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 9;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogs.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        {currentCards.map((article, index) => (
          <Link href={article.slug} className="col" key={index}>
            <div className="card h-100">
              <img
                src={`/blogs/${article.blog_image}`}
                className="card-img-top"
                alt={`ritz-media-world/${article.blog_image}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <small className="text-muted">
                    {new Date(article.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </small>
                </div>
                <h5 className="card-title mt-2">{article.title}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5; // Adjust for more or fewer visible pages

    if (totalPages <= maxPagesToShow) {
      // If total pages are few, show all
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage > 3) pages.push(1, "..."); // First page + dots

      // Middle pages logic
      const start = Math.max(2, currentPage - 2);
      const end = Math.min(totalPages - 1, currentPage + 2);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...", totalPages); // Last page + dots
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav className="my-4">
    <ul
      className="pagination justify-content-center"
      style={{
        backgroundColor: "#111", // Black background
        padding: "10px",
        borderRadius: "8px",
        display: "inline-flex",
      }}
    >
      {/* Previous Button */}
      <li
        className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        style={{
          cursor: "pointer",
          margin: "0 5px",
        }}
      >
        <span
          className="page-link"
          style={{
            backgroundColor: currentPage === 1 ? "#555" : "#fddf82", // Darker gold for disabled, vibrant gold for active
            color: "#111",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          « Prev
        </span>
      </li>
  
      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <li
          key={index}
          className={`page-item ${currentPage === page ? "active" : ""}`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          style={{
            cursor: page === "..." ? "default" : "pointer",
            margin: "0 5px",
          }}
        >
          <span
            className="page-link"
            style={{
              backgroundColor: currentPage === page ? "#fddf82" : "#222",
              color: currentPage === page ? "#111" : "#fddf82",
              fontWeight: "bold",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              transition: "0.3s",
            }}
          >
            {page}
          </span>
        </li>
      ))}
  
      {/* Next Button */}
      <li
        className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        style={{
          cursor: "pointer",
          margin: "0 5px",
        }}
      >
        <span
          className="page-link"
          style={{
            backgroundColor: currentPage === totalPages ? "#555" : "#fddf82",
            color: "#111",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Next »
        </span>
      </li>
    </ul>
  </nav>
  
  );
};


export default blogs;
