import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="secondary-bg">
        <div className="container">
          <div className="footer_top">
            <div className="footer_widgets about_w">
              <img src="/assets/logo.png" alt="" style={{ width: "120px" }} />

              <p>
                Web Tech Solutions is a cutting-edge software company
                specializing in innovative technology solutions for businesses.
              </p>
            </div>
            <div className="footer_widgets">
              <h6>Important Links</h6>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>

                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="footer_widgets">
              <h6>Support Links</h6>
              <ul>
                <li>
                  <a href="#">Our Clients</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>

                <li>
                  <a href="#contact">Get In Touch </a>
                </li>
              </ul>
            </div>
            <div className="footer_widgets">
              <h6>Recent Posts</h6>
              <div className="recent_psot">
                <div className="rec_img">
                  <a href="#">
                    <img src="assets/images/img_200x200.jpg" alt="image" />
                  </a>
                </div>
                <div className="rec_info">
                  <a href="#">
                    <h6>At vero eos et accusamus</h6>
                  </a>
                  <div className="rec_meta">
                    <a href="#">20 Comments </a>
                  </div>
                </div>
              </div>
              <div className="recent_psot">
                <div className="rec_img">
                  <a href="#">
                    <img src="assets/images/img_200x200_2.jpg" alt="image" />
                  </a>
                </div>
                <div className="rec_info">
                  <a href="#">
                    <h6>At vero eos et accusamus</h6>
                  </a>
                  <div className="rec_meta">
                    <a href="#">20 Comments </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom text-center">
            <p>Copyright © 2023 WEB TECH SOLUTIONS. All Right Reserved.</p>
          </div>
        </div>
      </footer>
      {/* Search Pop Up */}
      <div
        className="search_overlay_menu fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* Close Icon */}
        <a
          href="#"
          className="search_overlay_close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa fa-times" aria-hidden="true" />
        </a>
        {/* End Close Icon */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              {/* Search Form */}
              <form>
                <div className="search-icon-lg">
                  <i className="fa fa-search" aria-hidden="true" />
                </div>
                <label>Enter keywords to Search Product</label>
                <input defaultValue type="search" placeholder="Search..." />
                <button type="submit">
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
              </form>
              {/* End Search Form */}
            </div>
          </div>
        </div>
      </div>
      {/* /Footer */}
      {/*Back-to-top*/}
      <div id="back-top" className="back-top">
        <a href="#top">
          <i className="fa fa-angle-up" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
