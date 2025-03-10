


const PagesBanner = () => {
  return (
    <section
        className="breadcrumb__area fix p-relative breadcrumb__plr breadcrumb__overlay breadcrumb__bg"
        data-background="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-bg-1.jpg"
        data-bg-color="#140e0e"
      >
        <div className="breadcrumb__shape">
          <img
            src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-shape.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center p-relative z-index-2">
                <div className="breadcrumb__list">
                  {/* <!-- Breadcrumb NavXT 7.4.1 --> */}
                  <span property="itemListElement" typeof="ListItem">
                    <a
                      property="item"
                      typeof="WebPage"
                      title="Go to Avtrix."
                      href="https://etorisoft.com/wp/avtrix"
                      className="home"
                    >
                      <span property="name">Avtrix</span>
                    </a>
                    <meta property="position" content="1" />
                  </span>
                  <span className="dvdr">
                    <i className="far fa-angle-right"></i>
                  </span>
                  <span property="itemListElement" typeof="ListItem">
                    <span
                      property="name"
                      className="post-root post post-post current-item"
                    >
                      Blog
                    </span>
                    <meta
                      property="url"
                      content="https://etorisoft.com/wp/avtrix/blog/"
                    />
                    <meta property="position" content="2" />
                  </span>
                </div>
                <h3 className="breadcrumb__title">Blog</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PagesBanner
