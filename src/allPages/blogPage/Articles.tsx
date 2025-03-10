"use client"

import React, { useState } from 'react';

interface Article {
  imageSrc: string;
  date: string;
  minutesRead: string;
  title: string;
  description: string;
}

const Articles: React.FC = () => {
  const articles: Article[] = Array.from({ length: 22 }, (_, index) => ({
    imageSrc: 'https://images.unsplash.com/photo-1740968786458-9bf66e5e0bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
    date: '07 March 2025',
    minutesRead: '6 min read',
    title: `Article Title ${index + 1}`,
    description: 'This is a sample description of the article.'
  }));

  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 9;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = articles.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(articles.length / cardsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
        {currentCards.map((article, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={article.imageSrc}
                className="card-img-top"
                alt="Article"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <small className="text-muted">{article.date}</small>
                  <small className="text-muted">{article.minutesRead}</small>
                </div>
                <h5 className="card-title mt-2">{article.title}</h5>
                <p className="card-text">{article.description}</p>
              </div>
            </div>
          </div>
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
  return (
    <nav className="my-4">
      <ul className="pagination justify-content-center">
        {/* Previous Button */}
        <li
          className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
          onClick={() => onPageChange(currentPage - 1)}
          style={{ cursor: 'pointer' }}
        >
          <span className="page-link">« Prev</span>
        </li>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? 'active transition' : ''}`}
            onClick={() => onPageChange(index + 1)}
            style={{ cursor: 'pointer' }}
          >
            <span className="page-link">{index + 1}</span>
          </li>
        ))}

        {/* Next Button */}
        <li
          className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
          onClick={() => onPageChange(currentPage + 1)}
          style={{ cursor: 'pointer' }}
        >
          <span className="page-link">Next »</span>
        </li>
      </ul>
    </nav>
  );
};

export default Articles;
