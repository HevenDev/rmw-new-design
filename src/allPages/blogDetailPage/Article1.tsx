import React from "react";

// Define the type for a blog post
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

// Blog data array
const blogData: BlogPost[] = [
  {
    id: "post-2447",
    title: "Innovative Solutions for a Digital Tomorrow",
    image: "https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/09/blog-post-5.png",
    author: "admin",
    date: "September 24, 2024",
    comments: "No Comments",
    excerpt:
      "Digital marketing encompasses a range of strategies and techniques used to promote products and services online. It leverages channels such as social media, search engines, email, and websites to reach and engage with target audiences. By utilizing data analytics, businesses can gain insights into consumer behavior, allowing for more personalized and effective marketing plans. The dynamic […]",
    link: "https://etorisoft.com/wp/avtrix/innovative-solutions-for-a-digital-tomorrow/",
    categories: ["agency", "apps", "business"],
    tags: ["agency", "apps", "business"],
  },
  
  
];

const Article1: React.FC = () => {
  return (
    <section className="postbox__area fix pt-160 pb-160">
      <div className="container">
        <div className="row g-5">
          <div className="col-xxl-8 col-xl-8 col-lg-8 blog-post-items blog-padding">
            <div className="postbox__wrapper">

              {/* Dynamically render blog posts */}
              {blogData.map((post) => (
                <article
                  key={post.id}
                  id={post.id}
                  className={`postbox__item format-standard ${post.id} post type-post status-publish has-post-thumbnail hentry category-${post.categories.join(
                    " "
                  )} tag-${post.tags.join(" ")}`}
                >
                  <div className="postbox__thumb mb-30 p-relative">
                    <a href={post.link}>
                      <img
                        width="851"
                        height="462"
                        src={post.image}
                        className="img-responsive wp-post-image"
                        alt=""
                        decoding="async"
                        srcSet={`${post.image} 851w, ${post.image.replace(".png", "-300x163.png")} 300w, ${post.image.replace(".png", "-768x417.png")} 768w`}
                        sizes="(max-width: 851px) 100vw, 851px"
                      />{" "}
                    </a>
                  </div>
                  <div className="postbox__meta-box mb-15">
                    <a
                      href="https://etorisoft.com/wp/avtrix/author/admin/"
                      className="postbox__meta-title"
                    >
                      <span>
                        <i className="fad fa-user"></i>
                      </span>{" "}
                      {post.author}{" "}
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fas fa-calendar-alt"></i>
                      </span>{" "}
                      {post.date}{" "}
                    </a>
                    <a href="#" className="postbox__meta-title">
                      <span>
                        <i className="fad fa-comments"></i>
                      </span>{" "}
                      {post.comments}{" "}
                    </a>
                  </div>{" "}
                  <h3 className="postbox__title mb-25">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <div className="postbox__text mb-30">
                    <p>{post.excerpt}</p>
                  </div>
                  <div className="postbox__red-more">
                    <a href={post.link} className="tp-btn__blog-1">
                      Read More{" "}
                      <span>
                        <svg
                          width="42"
                          height="9"
                          viewBox="0 0 42 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M41.3189 4.71292C41.5142 4.51766 41.5142 4.20108 41.3189 4.00582L38.137 0.823838C37.9417 0.628576 37.6251 0.628576 37.4299 0.823838C37.2346 1.0191 37.2346 1.33568 37.4299 1.53094L40.2583 4.35937L37.4299 7.1878C37.2346 7.38306 37.2346 7.69964 37.4299 7.89491C37.6251 8.09017 37.9417 8.09017 38.137 7.89491L41.3189 4.71292ZM0.720703 4.85938L40.9654 4.85937L40.9654 3.85937L0.720703 3.85938L0.720703 4.85938Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="tp-postbox-pagination">
                <div className="basic-pagination mt-60">
                  <nav>
                    <ul>
                      <li>
                        <span aria-current="page" className="page-numbers current">
                          1
                        </span>
                      </li>
                      <li>
                        <a className="page-numbers" href="https://etorisoft.com/wp/avtrix/blog/page/2/">
                          2
                        </a>
                      </li>
                      <li>
                        <a className="next page-numbers" href="https://etorisoft.com/wp/avtrix/blog/page/2/">
                          <i className="far fa-angle-double-left"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>{" "}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="sidebar__wrapper">
              <div id="search-1" className="sidebar__widget mb-40 widget_search">
                <h3 className="sidebar__widget-title">Search</h3>
                <div className="blog-sidebar__search p-relative">
                  <div className="search-px">
                    <form action="https://etorisoft.com/wp/avtrix/" method="get">
                      <input type="text" name="s" placeholder="Search" />
                      <button type="submit">
                        {" "}
                        <i className="far fa-search"></i>{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div id="tp-latest-posts-1" className="sidebar__widget mb-40 widget_tp-latest-posts">
                <h3 className="sidebar__widget-title"> Recent Posts </h3>
                <div className="tp-sidebar-widget-content">
                  {blogData.map((post) => (
                    <div key={post.id} className="tp-sidebar-post tp-rc__post tp-sidebar-post-specing">
                      <div className="tp-rc__post d-flex align-items-center">
                        <div className="tp-rc__post-thumb mr-25">
                          <a href={post.link}>
                            <img
                              width="150"
                              height="150"
                              src={post.image.replace(".png", "-150x150.png")}
                              className="attachment-thumbnail size-thumbnail wp-post-image"
                              alt=""
                              decoding="async"
                            />
                          </a>
                        </div>
                        <div className="tp-rc__post-content">
                          <h3 className="tp-rc__post-title">
                            <a href={post.link}>{post.title}</a>
                          </h3>
                          <div className="tp-rc__post-meta">
                            <span>
                              {" "}
                              <i className="fas fa-calendar-alt pr-5"></i> {post.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="categories-2" className="sidebar__widget mb-40 widget_categories">
                <h3 className="sidebar__widget-title">Categories</h3>
                <ul>
                  <li className="cat-item cat-item-2">
                    <a href="https://etorisoft.com/wp/avtrix/category/agency/">Agency</a>
                  </li>
                  <li className="cat-item cat-item-3">
                    <a href="https://etorisoft.com/wp/avtrix/category/business/">Business</a>
                  </li>
                  <li className="cat-item cat-item-4">
                    <a href="https://etorisoft.com/wp/avtrix/category/marketing/">Marketing</a>
                  </li>
                  <li className="cat-item cat-item-5">
                    <a href="https://etorisoft.com/wp/avtrix/category/software/">Software</a>
                  </li>
                  <li className="cat-item cat-item-6">
                    <a href="https://etorisoft.com/wp/avtrix/category/technology/">Technology</a>
                  </li>
                  <li className="cat-item cat-item-1">
                    <a href="https://etorisoft.com/wp/avtrix/category/uncategorized/">Uncategorized</a>
                  </li>
                </ul>
              </div>
              <div id="tag_cloud-1" className="sidebar__widget mb-40 widget_tag_cloud">
                <h3 className="sidebar__widget-title">Tags</h3>
                <div className="tagcloud">
                  {blogData.flatMap((post) => post.tags).map((tag, index) => (
                    <a
                      key={index}
                      href={`https://etorisoft.com/wp/avtrix/tag/${tag}/`}
                      className="tag-cloud-link"
                      style={{ fontSize: "16.4pt" }}
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article1;