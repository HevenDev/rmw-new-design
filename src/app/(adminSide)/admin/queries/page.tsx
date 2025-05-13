"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  resume: string;
  category: string;
  message: string;
  created_at: string; // Adjust if your DB uses another column name
}

const FormSubmissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch("/api/get-submissions");
        const data = await res.json();

        if (data.success) {
          setSubmissions(data.data);
        }
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="container py-5">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-center fw-bold mb-4">Form Submissions</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>File</th>
                  <th>Category</th>
                  <th>Message</th>
                  <th>Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id}>
                    <td>{sub.id}</td>
                    <td>{sub.name}</td>
                    <td>{sub.email}</td>
                    <td>{sub.phone}</td>
                    <td>
                      {sub.resume ? (
                        <a
                          href={sub.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {sub.resume.split("/").pop()}
                        </a>
                      ) : (
                        "No file"
                      )}
                    </td>

                    <td>{sub.category}</td>
                    <td>{sub.message}</td>
                    <td>{new Date(sub.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSubmissions;
