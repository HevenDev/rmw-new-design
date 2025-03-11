import Link from "next/link"

const Stratagies = () => {
  return (
    <div className="elementor-widget-container">
    <section className="tp-cate__area fix pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-cate__title-box">
              <h3 className="tp-cate__title mb-40 tp-split__text tp-split__in-right">
                STRATEGIES FOR BUILDING GROWING, AND MANAGING YOUR
                BRAND'S IDENTITY
              </h3>
              <div className="tp-hero__action d-flex align-items-center">
                <span>
                  <Link
                    className="tp-hero__action-btn"
                    href="https://etorisoft.com/wp/avtrix/service/"
                    rel="nofollow"
                    target="_self"
                  >
                    <span>
                      <svg
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.99996 26.5469L29.4548 7.97636M6.73828 2L31.2851 6.73832L26.5468 31.2852"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="square"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </span>
                <Link
                  href="https://etorisoft.com/wp/avtrix/service/"
                  rel="nofollow"
                  target="_self"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-cate__dsc-wrap ml-95">
              <div className="tp-cate__dsc mb-20">
                <p>
                  Must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and
                  I will give you a complete account of the system,
                  and expound the actual teachings of the great
                  explorer of the truth.
                </p>
                <p>
                  The master-builder of human happiness. No one
                  rejects, dislikes, or avoids pleasure itself,
                  because it is pleasure, but because those who do
                  not know how to pursue pleasure rationally
                  encounter.
                </p>
              </div>
              <div className="tp-cate__list-box pt-10">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="tp-cate__list">
                      <Link href="#">
                        <i
                          aria-hidden="true"
                          className="fas fa-check-circle"
                        ></i>
                        <span>Efficient Sprint Planning</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="tp-cate__list">
                      <Link href="#">
                        <i
                          aria-hidden="true"
                          className="fas fa-check-circle"
                        ></i>
                        <span>On Time Delivery</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="tp-cate__list">
                      <Link href="#">
                        <i
                          aria-hidden="true"
                          className="fas fa-check-circle"
                        ></i>
                        <span>Innovative Strategies</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="tp-cate__list">
                      <Link href="#">
                        <i
                          aria-hidden="true"
                          className="fas fa-check-circle"
                        ></i>
                        <span>Standup and Demos</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Stratagies
