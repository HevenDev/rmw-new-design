"use client"
import { useState } from 'react';
import styles from './Card.module.css';
import Link from "next/link";

const ProjectCards = () => {
  const cardData = [
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'App Concept Design', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-2.jpg' },
    { title: 'E-commerce Site Plan', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-3.jpg' },
    { title: 'Logo Design Process', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-4.jpg' },
    { title: 'Business Website Design', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-5.jpg' },
    { title: 'Portfolio Building', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-6.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },
    { title: 'Website Idea Generate', image: 'https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/port-3-1.jpg' },

  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCards = cardData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container my-5">
      <div className="row">
        {selectedCards.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className={`card bg-dark text-white ${styles.card}`}>
              <div className={styles.imageContainer}>
                <img
                  src={card.image}
                  className={`card-img-top ${styles.image}`}
                  alt={card.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <Link href="#" className={`bg-orange-600 ${styles.button}`}>
                  Case Studies <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
  <button 
    onClick={handlePrev} 
    disabled={currentPage === 1} 
    style={{
      color: "#000", 
      background: "#fddf82", 
      padding: "10px 20px", 
      border: "2px solid #000", 
      borderRadius: "30px",
      fontWeight: "bold",
      cursor: currentPage === 1 ? "not-allowed" : "pointer",
      opacity: currentPage === 1 ? 0.5 : 1,
      transition: "all 0.3s ease-in-out",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)"
    }}
    className="mx-2"
  >
    ⬅ Prev
  </button>

  <span style={{ fontSize: "16px", padding: "5px 15px", color: "white", borderRadius: "20px" }}>
    Page {currentPage} of {totalPages}
  </span>

  <button 
    onClick={handleNext} 
    disabled={currentPage === totalPages} 
    style={{
      color: "#000", 
      background: "rgb(224, 199, 122)", 
      padding: "10px 20px", 
      border: "2px solid #000", 
      borderRadius: "30px",
      fontWeight: "bold",
      cursor: currentPage === totalPages ? "not-allowed" : "pointer",
      opacity: currentPage === totalPages ? 0.5 : 1,
      transition: "all 0.3s ease-in-out",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)"
    }}
    className="mx-2"
  >
    Next ➡
  </button>
</div>

    </div>
  );
};

export default ProjectCards;
