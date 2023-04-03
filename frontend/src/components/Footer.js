import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer"
        style={{ background: "#1F3C88", color: "#fff" }}
      >
        <div className="columns">
          <div className="column">
            <p> PT DAnS Multi Pro</p>
            <h4
              className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify"
            >
              Address
            </h4>
            <p>Jalan MT Haryono Kavling 2-3, Jakarta Selatan</p>
            <hr></hr>
            <br></br>
            <p>Telephone: (021) 5157 600</p>{" "}
            <p>Main email: info@dansmultipro.com</p>{" "}
            <p>Admissions: info@dansmultipro.com</p>{" "}
            <p>Human Resources: hr.admin@dansmultipro.com</p>{" "}
          </div>

          <div className="column">
            <h4
              className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify"
            >
              Quick Links
            </h4>

            <p className="bd-footer-link">
              <a href="https://">
                <span className="icon-text">
                  <span>Photo Gallery</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Job Vacancies</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>FAQ Admissions</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Contact Us</span>
                </span>
              </a>
            </p>
          </div>

          <div className="column">
            <h4
              className="bd-footer-title
                 has-text-weight-medium
                 has-text-justify"
            >
              Useful Links
            </h4>

            <p className="bd-footer-link">
              <a href="https://">
                <span className="icon-text">
                  <span> Alumni</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Term Dates</span>
                </span>
              </a>
              <br />
              <a href="https://">
                <span className="icon-text">
                  <span>Virtual Tour</span>
                </span>
              </a>
            </p>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>Copyright © 2023 Amanda Rahmat Hidayat</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
