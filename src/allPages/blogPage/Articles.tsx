"use client";

import Loader from "@/components/loader/Loader";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Article {
  blog_image: string;
  slug: string;
  title: string;
  description: string;
  created_at: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Article[]>([]); // State to store blogs

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
  const cardsPerPage = 12;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogs.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-4 mb-50">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        {currentCards.map((article, index) => (
          <Link href={article.slug} className="col" key={index}>
            <div style={{ background: "white", color: "black" }} className="card h-100">
              <div style={{ overflow: "hidden", height: "200px" }}>
                <img
                  src={`/blogs/${article.blog_image}`}
                  className="card-img-top"
                  alt={`ritz-media-world/${article.blog_image}`}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
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

      <div className="text-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            color: "#000",
            background: "var(--tp-primary-blue)",
            padding: "10px 20px",
            // border: "2px solid #000",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            opacity: currentPage === 1 ? 0.5 : 1,
            transition: "all 0.3s ease-in-out",
            boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
          }}
          className="mx-2"
        >
          ⬅ Prev
        </button>

        <span style={{ fontSize: "16px", padding: "5px 15px", color: "#0c0c0c", borderRadius: "20px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            color: "#000",
            background: "var(--tp-primary-blue)",
            padding: "10px 20px",
            // border: "2px solid #000",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            opacity: currentPage === totalPages ? 0.5 : 1,
            transition: "all 0.3s ease-in-out",
            boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
          }}
          className="mx-2"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};




export default Blogs;
