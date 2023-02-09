import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <main className="main-container" style={{ marginTop: 120 }}>
        {/* About Company*/}
        <section className="section-padding about-company">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="section-header heading_style4 center">
                  <h2>About Our Company</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <img src="assets/vector1.png" alt="" />
              </div>
              <div className="col-sm-6">
                <h2>WE ARE WEB TECH SOLUTIONS</h2>
                <p>
                  Web Tech Solutions is a trusted software company in
                  Bangladesh. We provide international standard IT services
                  about software & web development, web design, graphics design
                  & any on
                </p>
                <h2>our mission</h2>
                <p>
                  Clients are our first priority and their satisfaction is our
                  satisfaction. We Web Touch LTD team want to implement those
                  dream into reality.
                </p>
                <h2>our Vision</h2>
                <p>
                  Being part of those leading companies available in Bangladesh
                  We Web Tech Solutions dream big to achieve big and our only
                  goal is to achieve the trust and worthiness of clients. Web
                  Tech Solutions love to serve people in their needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Work Experience*/}
        <section className="section-padding parallex-bg work-experience">
          <div className="dark-overlay" />
          <div className="container div_zindex">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-sm-offset-2">
                <div className="white-text work-exp-column">
                  <h1>25</h1>
                  <h4>
                    Years
                    <br />
                    Working Experience{" "}
                  </h4>
                  <a href="#" className="btn white_btn">
                    View All Projects
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Project Steps*/}
        <section className="section-padding step-projects">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-md-offset-3">
                <div className="section-header heading_style4 center">
                  <h2>Steps for us to Complete a Project</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="steps">
                  {" "}
                  <span className="step-count">01</span>
                  <h4>Planning</h4>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="steps">
                  {" "}
                  <span className="step-count">02</span>
                  <h4>Design</h4>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="steps">
                  {" "}
                  <span className="step-count">03</span>
                  <h4>Launch</h4>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="steps">
                  {" "}
                  <span className="step-count">04</span>
                  <h4>Maintenance</h4>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                {" "}
                <a href="#" className="btn">
                  Start Project With Us
                </a>{" "}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default about;
