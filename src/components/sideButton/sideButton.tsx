"use client";
import React, { useState } from "react";
import styles from "./sideButton.module.css";

const SideButton: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <div className={styles.growBusinessBtn} onClick={toggleForm}>
        FREE CONSULTANCY
      </div>

      <div
        className={`${styles.modalOverlay} ${showForm ? styles.show : ""}`}
        onClick={toggleForm}
      >
        <div
          className={`${styles.modalContent} ${
            showForm ? styles.slideIn : styles.slideOut
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button style={{fontSize:"40px"}} className={styles.closeBtn} onClick={toggleForm}>
            &times;
          </button>
          <h2 style={{fontSize:"28px"}}>WE&apos;LL CONNECT CONNECT WITH YOU SHORTLY</h2>
          <form className={styles.queryForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Your Phone" required />
            <input type="email" placeholder="Email Address" required />
            <select required>
              <option value="">Select Service</option>
              <option>Digital Marketing</option>
              <option>Creative Services</option>
              <option>Print Advertising</option>
              <option>Radio Advertising</option>
              <option>Content Marketing</option>
              <option>Web Designing & Development</option>
              <option>Celebrity Endorsements</option>
              <option>Influencer Marketing</option>
            </select>
            <textarea
              placeholder="Your Query"
              style={{ resize: "none", height: "100px" }}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SideButton;
