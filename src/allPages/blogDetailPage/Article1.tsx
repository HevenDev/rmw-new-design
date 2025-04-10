"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Loader from "@/components/loader/Loader";
import parse from "html-react-parser";
import { IoSearchSharp } from "react-icons/io5";

type BlogPost = {
  id: string;
  title: string;
  image: string;
  author: string;
  date: string;
  comments: string;
  excerpt: string;
  link: string;
  categories: string[];
  tags: string[];
};

interface BlogPosts {
  id: number;
  category_id: number;
  title: string;
  slug: string;
  youtube_url: string;
  yt_width: number;
  yt_height: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  blog_image: string;
  description: string;
  created_at: string;
}

const blogData: BlogPost[] = [
  {
    id: "post-2447",
    title: "Innovative Solutions for a Digital Tomorrow",
    image:
      "https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5.png",
    author: "admin",
    date: "September 24, 2024",
    comments: "No Comments",
    excerpt: "Digital marketing encompasses a range of strategies...",
    link: "https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/",
    categories: ["agency", "apps", "business"],
    tags: ["agency", "apps", "business"],
  },
];

const Article1 = () => {
  const [article, setArticle] = useState<BlogPosts | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const blog_slug = params?.blogDetailPage as string;
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blog/${blog_slug}`);
        setArticle(response.data.blog);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [blog_slug]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>No article found.</p>;

  return (
    <section className="pt-160 pb-120" style={{ backgroundColor: "#0f0f0f", color: "#fff" }}>
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-md-8" ref={contentRef}>
            <div className="text-white p-4 rounded shadow-sm mb-4" style={{ backgroundColor: "#1f1f1f" }}>
              <img
                src={`/blogs/${article.blog_image}`}
                alt={article.slug}
                className="img-fluid rounded mb-3"
                style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center" }}
              />
              <div className="text-white mb-2">
                <i className="fas fa-calendar-alt me-2"></i>
                {new Date(article.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h1 className="h3 mb-4">{article.title}</h1>
              <div className="blog_description">{parse(article.description)}</div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-md-4" style={{ backgroundColor: "#0f0f0f" }}>
            <div id="stickySidebar" style={{
              position: "sticky",
              top: "120px", // standard top offset
              maxHeight: "75vh", // don't go beyond viewport
              overflowY: "auto", // scroll when needed
              paddingRight: "8px", // avoid content cut by scrollbar
            }}>
              {/* Search */}
              <div className="p-3 rounded shadow-sm mb-4" style={{ backgroundColor: "#1f1f1f" }}>
                <h5 className="mb-3 text-white">Search</h5>
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <button className="btn btn-primary" type="submit">
                      <IoSearchSharp />
                    </button>
                  </div>
                </form>
              </div>

              {/* Recent Posts */}
              <div className="p-3 text-white rounded shadow-sm mb-4" style={{ backgroundColor: "#1f1f1f" }}>
                <h5 className="mb-3 text-white">Recent Posts</h5>
                {blogData.map((post) => (
                  <div key={post.id} className="d-flex mb-3 gap-3">
                    <Link href={post.link}>
                      <img
                        src={post.image.replace(".png", "-150x150.png")}
                        alt={post.title}
                        className="rounded me-3"
                        style={{ width: "64px", height: "64px", objectFit: "cover" }}
                      />
                    </Link>
                    <div>
                      <h6 className="mb-1 text-white">
                        <Link href={post.link}>{post.title}</Link>
                      </h6>
                      <small className="text-white">{post.date}</small>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="p-3 rounded text-white shadow-sm mb-4" style={{ backgroundColor: "#1f1f1f" }}>
                <h5 className="mb-3 text-white">Categories</h5>
                <ul className="list-unstyled mb-0">
                  <li><Link href="/">Agency</Link></li>
                  <li><Link href="/">Business</Link></li>
                  <li><Link href="/">Marketing</Link></li>
                  <li><Link href="/">Software</Link></li>
                  <li><Link href="/">Technology</Link></li>
                  <li><Link href="/">Uncategorized</Link></li>
                </ul>
              </div>

              {/* Tags */}
              {/* <div className="bg-white p-3 rounded shadow-sm">
                <h5 className="mb-3">Tags</h5>
                <div className="d-flex flex-wrap gap-2">
                  {blogData.flatMap((post) => post.tags).map((tag, i) => (
                    <Link
                      key={i}
                      href="/"
                      className="badge bg-secondary text-decoration-none"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Article1;

