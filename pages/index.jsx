import style from "../styles/Common.module.css";
export default function Home() {
  return (
    <div>
      <section
        style={{
          background: "rgb(255,255,255)",
          background:
            "linear-gradient(25deg, rgba(255,255,255,1) 0%, rgba(249,255,249,1) 100%)",
        }}
      >
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-md-7">
              <div className="intro_text white-text">
                <h1 className="text-dark" style={{ fontSize: 44 }}>
                  <span style={{ color: "#0554F2", fontSize: 54 }}>
                    WE BUILT 40+{" "}
                  </span>{" "}
                  passionate software professionals with quality in mind.
                </h1>
                <p className="text-dark fw-normal">
                  We are very focused on creating clear codes with proper notes
                  that are simple to manage and edit. Our complete software
                  projects will assist you in launching your business right
                  away.
                </p>
                <button className={style.btn_login}>Read More</button>
              </div>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://tarn-react.envytheme.com/img/services/service1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* /Intro */}
      {/* About-us */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="section-header heading_style1 text-center">
            <h2 style={{ textTransform: "uppercase" }}>About Us</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
              >
                <p>
                  <span style={{ color: "#0554F2", fontSize: 22 }}>
                    Web Tech Solutions{" "}
                  </span>{" "}
                  is a trusted software company in Bangladesh. We provide
                  international standard IT services about software & web
                  development, web design, graphics design & any online
                  solutions. We work to digitize your creative mind. We deals
                  with the whole website and software development processes. Our
                  developed software provides great value for small to large
                  businesses. Our website acts as the best dynamic website as
                  per the client&rsquo requirements. Our company provides static
                  & dynamic websites for schools, colleges, Universities,
                  Superstores, Businesses, Real states, and all kinds of
                  customized websites. Specially we build E-commerce websites
                  with all cutting edge technology.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src="assets/images/about_img.jpg" alt="image" />
            </div>
          </div>
        </div>
      </section>
      {/* /About-us */}
      {/* Video-presentation */}
      {/* <section>
          <div className="container">
            <div className="section-header heading_style1 text-center">
              <h2>TEST OUR DEMO</h2>
            </div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  WEB DESIGN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  WEB DEVELOPMENT
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  GRAPHICS DESIGN
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="pills-disabled"
                  aria-selected="false"
                  disabled
                >
                  Disabled
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex={0}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus eligendi doloremque molestias enim numquam quam odit
                iste, repudiandae laboriosam atque sint ratione incidunt veniam
                earum ex voluptate ab. Modi, cupiditate?
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex={0}
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabIndex={0}
              >
                ...
              </div>
            </div>
          </div>
        </section> */}
      {/* /Video-presentation */}
      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header heading_style1 text-center">
            <h2>OUR EXPERT SERVICES</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="service_box">
                <div className="service_img">
                  <img src="assets/images/service_img1.jpg" alt="image" />
                </div>
                <div className="service_info text-center">
                  <div className="service_icon">
                    <i className="fa fa-cubes" />
                  </div>
                  <a href="#">
                    <h5>Web Development</h5>
                  </a>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="service_box">
                <div className="service_img">
                  <img src="assets/images/service_img2.jpg" alt="image" />
                </div>
                <div className="service_info text-center">
                  <div className="service_icon">
                    <i className="fa fa-paint-brush" />
                  </div>
                  <a href="#">
                    <h5>Software Development</h5>
                  </a>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="service_box">
                <div className="service_img">
                  <img src="assets/images/service_img3.jpg" alt="image" />
                </div>
                <div className="service_info text-center">
                  <div className="service_icon">
                    <i className="fa fa-object-group" />
                  </div>
                  <a href="#">
                    <h5 className="w-100"> Mobile App Development</h5>
                  </a>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="service_box">
                <div className="service_img">
                  <img src="assets/images/service_img3.jpg" alt="image" />
                </div>
                <div className="service_info text-center">
                  <div className="service_icon">
                    <i className="fa fa-object-group" />
                  </div>
                  <a href="#">
                    <h5 className="w-100">Graphics Design</h5>
                  </a>
                  <p>
                    Reference site about Lorem Ipsum, giving information on its
                    origins, as well as a random Lipsum generator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video-presentation" className="section-padding gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="video">
                <div className="dark-overlay" />
                <img src="assets/images/video_poster.jpg" alt="image" />
                <span className="video-play">
                  <a href="https://vimeo.com/21294655" className="popup-vimeo">
                    <i className="fa fa-play-circle" aria-hidden="true" />
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-6 px-lg-5">
              <h2 className="text-center">
                WHY <span style={{ color: "#144BBB" }}>CHOOSE US?</span>
              </h2>
              <h5 className="text-center">OUR RESULT SPEAKS FOR THEMSELVES</h5>
              <p className="mt-5">
                <span style={{ color: "#0554F2" }}> Web Tech Solutions</span> is
                a Software and Website Development Company in Bangladesh that
                offers noticeable types of assistance for our important clients
                until their fulfillment. Our experienced developers make your
                concern a lot more straightforward and track down a simple
                method for giving a superior solution. Our team members are
                working hard to give you the best solutions.
                <br />
              </p>
              <p>
                1. Experience: Our team members are enough experienced to
                understand your need that ensures the quality of services.{" "}
                <br /> <br /> 2. Working Environment: We have a great
                environment for teamwork where our developers developed every
                project maintaining the SDLC. <br />
                <br />
                3. Commitment: We believed in commitment. We work to the
                client&rsquo satisfaction and deliver our services in time. We
                also give after-sales support if you face any problems with the
                project.
              </p>
              <button className={style.btn_login}>Read More</button>
            </div>
          </div>
        </div>
      </section>
      {/* /Services */}
      {/* Fan-facts */}
      <section id="" className="section-padding gray_bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="icon_div">
                <i className="fa fa-heart-o" />
              </div>
              <h2>1500+</h2>
              <h6>Our Projects </h6>
            </div>
            <div className="col-sm-4">
              <div className="icon_div">
                <i className="fa fa-users" />
              </div>
              <h2>1000+</h2>
              <h6>Happy Clients </h6>
            </div>
            <div className="col-sm-4">
              <div className="icon_div">
                <i className="fa fa-trophy" />
              </div>
              <h2>50+</h2>
              <h6>Win awards</h6>
            </div>
          </div>
        </div>
      </section>
      {/* /Fan-facts */}
      {/* Portfolio */}

      {/* <section id="portfolio" className="section-padding">
          <div className="container">
            <div className="section-header heading_style1 text-center">
              <h2>Our creative portfolio</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="portfolio-tab">
                  <ul className="filter">
                    <li className="active">
                      <a href="#" data-filter="*">
                        All Projects
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".branding">
                        Branding
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".illustrations">
                        Illustrations
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".packaging">
                        Packaging
                      </a>
                    </li>
                    <li>
                      <a href="#" data-filter=".printing">
                        Printing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row js-iso">
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item illustrations printing">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_1.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item branding packaging">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_2.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item  printing branding">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_3.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item packaging illustrations">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_4.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item  illustrations printing">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_5.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 col-xs-12 mb-4 px-15 mb-lg-0 js-iso-item portfolio-item packaging branding">
                <div className="portfolio_wrap">
                  <div className="zoom-gallery">
                    <a
                      href="assets/images/portfolio_6.jpg"
                      className="image-popup-link"
                    >
                      <div className="portfolio_plus_small" />
                      <img src="assets/images/portfolio_6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="portfolio_info">
                    <div className="border-line" />
                    <a href="#">
                      <h5>Juice Bottle Packaging</h5>
                    </a>
                    <div className="portfolio_cate">
                      <a href="#">Illustrations</a> <a href="#">Packaging</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      {/* /Portfolio */}
      {/* Testimonials */}

      {/* /Testimonials */}
      {/* Clients */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="section-header heading_style1 text-center">
            <h2>GET STARTED TODAY</h2>
            <p>Open account for free & begin your new adventure with us.</p>
            <button className="btn btn-outline-danger mt-5">
              REGISTER NOW
            </button>
          </div>
          {/* <div className="logo_wrap">
              <a href="#">
                <img src="assets/images/client_logo1.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/images/client_logo2.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/images/client_logo3.png" alt="image" />
              </a>
              <a href="#">
                <img src="assets/images/client_logo4.png" alt="image" />
              </a>
            </div> */}
        </div>
      </section>
      {/* /Clients */}
      {/* Footer */}
    </div>
  );
}
