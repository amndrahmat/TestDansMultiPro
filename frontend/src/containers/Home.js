import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import VideoContentYT from "react-video-content-youtube";

const Home = () => {
  return (
    <div>
      {/* =================================SECTION 1=========================================== */}
      <div class="columns is-variable is-1-mobile is-1-tablet is-2-desktop is-2-widescreen is-2-fullhd mt-6 ml-3 mr-3 ">
        <div class="column">
          <VideoContentYT
            src="A0k2JMNANtw"
            params={{ autoPlay: true }}
            style={{ height: "600px", borderRadius: "200px" }}
          />
        </div>
        <div class="column">
          <p class="title">About Us</p>
          <div class="content">
            <p>
              PT Dans Multi Pro is a company specialized in IT Service
              Solutions. We provide solutions to all industries and sectors. Our
              professional employees keep innovating in order to meet customer
              satisfaction. Besides having a professional team to serve
              customers, we also build strategic alliances with many national,
              regional and global technology partners to broaden and strengthen
              our IT Solutions.
            </p>
          </div>
          <a href="/">
            <button
              className="button"
              style={{ background: "#070D59", color: "#fff" }}
            >
              Read More
            </button>
          </a>
        </div>
      </div>

      {/* =================================SECTION 2=========================================== */}
      <section class="hero is-small ">
        <div class="hero-body has-text-centered">
          <p class="title" style={{ color: "#070D59" }}>
            Our Values
          </p>
        </div>
      </section>

      {/* =================================SECTION 3=========================================== */}

      <div class="tile is-ancestor mt-6 ml-3 mr-3">
        <div class="tile is-parent">
          <article class="tile is-child box has-text-centered">
            <img
              className="img mb-3"
              src="./image/OF1.png"
              alt="OF1"
              style={{ height: "150px" }}
            />

            <p class="title">Performance</p>
            <div class="content">
              <p>Perform with Integrity, Ethics and Passion</p>
            </div>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box has-text-centered">
            <img
              className="img mb-3"
              src="./image/OF2.png"
              alt="OF2"
              style={{ height: "150px" }}
            />
            <p class="title">Innovation</p>
            <div class="content">
              <p>Embrace and Drive Change Through Innovation</p>
            </div>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box has-text-centered">
            <img
              className="img mb-3"
              src="./image/OF3.png"
              alt="OF3"
              style={{ height: "150px" }}
            />
            <p class="title">Teamwork</p>
            <div class="content">
              <p>Empower Our People to Create Value Through Teamwork</p>
            </div>
          </article>
        </div>
      </div>

      {/* =================================SECTION 4=========================================== */}

      <section class="hero is-medium is-link" style={{ background: "#1F3C88" }}>
        <div class="hero-body">
          <div class="has-text-centered">
            <p class="title" style={{ color: "#fff" }}>
              Vision and Mission
            </p>
          </div>
          <div class="tile is-ancestor mt-2 ml-3 mr-3">
            <div class="tile is-parent">
              <article class="tile is-child box has-text-centered">
                <div className="bg-image">
                  <img
                    src="./image/vision.png"
                    className="img-fluid"
                    alt="Sample"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <p className="text-white mb-0">
                        To become one of ten biggest software developers in Asia
                        Pacific by unleashing the full potential of amazing pool
                        of the software engineers in Indonesia and providing
                        world class outsourcing services.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div class="tile is-parent">
              <article class="tile is-child box has-text-centered">
                <div className="bg-image">
                  <img
                    src="./image/mission.png"
                    className="img-fluid"
                    alt="Sample"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  >
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <p className="text-white mb-0">
                        To become one of ten biggest software developers in Asia
                        Pacific by unleashing the full potential of amazing pool
                        of the software engineers in Indonesia and providing
                        world class outsourcing services.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>{" "}
        </div>
      </section>

      {/* =================================SECTION 5=========================================== */}
      <section
        class="hero is-medium is-link"
        style={{ background: "#fff", marginBottom: "20px" }}
      >
        <div class="has-text-centered">
          <p class="title" style={{ color: "#000", marginTop: "15px" }}>
            History
          </p>
        </div>
        <div class="tile is-ancestor mt-6 ml-3 mr-3">
          <div class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <img
                src="./image/history1.png"
                className="img-fluid"
                alt="Sample"
              />

              <p class="title" style={{ color: "#000", marginTop: "15px" }}>
                2014
              </p>
              <div class="content">
                <p>Founded in Jakarta, Indonesia</p>
              </div>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <img
                src="./image/history2.png"
                className="img-fluid"
                alt="Sample"
              />
              <p class="title" style={{ color: "#000", marginTop: "15px" }}>
                2016
              </p>
              <div class="content">
                <p>Setup New Office in Bandung</p>
              </div>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <img
                src="./image/history3.png"
                className="img-fluid"
                alt="Sample"
              />
              <p class="title" style={{ color: "#000", marginTop: "15px" }}>
                2018
              </p>
              <div class="content">
                <p>New Office at SOHO Pancoran, Jakarta</p>
              </div>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child box has-text-centered">
              <img
                src="./image/history4.png"
                className="img-fluid"
                alt="Sample"
              />
              <p class="title" style={{ color: "#000", marginTop: "15px" }}>
                2021
              </p>
              <div class="content">
                <p>50 people and still growing</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
