import React from "react";

const Contact = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <main className="main-container">
        <section className="section-padding contact1">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="section-header-inner">
                  <h2>
                    Please fill out the form below to inquire about our work
                  </h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      {" "}
                      <a href="#" className="btn full_width blue_btn">
                        Send Message
                      </a>{" "}
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <div className="contact-widget">
                  <h5>
                    <u>London Office</u>
                  </h5>
                  <p>Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.</p>
                  <ul className="list-style-none">
                    <li>
                      Email :{" "}
                      <a href="mailto:contact@webrul.com">contact@webrul.com</a>
                    </li>
                    <li>Phone: +61-1234-5678-90</li>
                  </ul>
                </div>
                <div className="contact-widget">
                  <h5>
                    <u>New York Office</u>
                  </h5>
                  <p>Alnahas Building, 2 AlBahr St, Tanta AlGharbia, Egypt.</p>
                  <ul className="list-style-none">
                    <li>
                      Email :{" "}
                      <a href="mailto:contact@webrul.com">contact@webrul.com</a>
                    </li>
                    <li>Phone: +61-1234-5678-90</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
