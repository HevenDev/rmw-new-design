import Link from "next/link";

interface PagesBannerProps {
  headingTitle: string;
}
const PagesBanner: React.FC<PagesBannerProps> = ({ headingTitle }) => {
  return (
    <section
      className="breadcrumb__area fix p-relative breadcrumb__plr breadcrumb__overlay breadcrumb__bg"
      data-background="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-bg-1.jpg"
      data-bg-color="#140e0e"
    >
      <img
          decoding="async"
          src="https://etorisoft.com/wp/avtrix/wp-content/uploads/2024/12/breadcrumb-bg-1.jpg"
          alt=""
          style={{
            backgroundColor: "rgb(20, 14, 14)",
            top:"1px", 
            height: "100%",
            width: "100%",
            position: "absolute",
            zIndex: "-1",
            filter: "sepia(100%) saturate(500%) hue-rotate(10deg)",
          }}
        />  
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
                  <Link
                    property="item"
                    typeof="WebPage"
                    title="Go to Ritz Media World."
                    href="/"
                    className="home"
                  >
                    <span property="name">Ritz Media World</span>
                  </Link>
                  <meta property="position" content="1" />
                </span>
              </div>
              <h3 className="breadcrumb__title">{headingTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagesBanner;
