import React from "react";
import { Logout } from "../constants/Method";
import { SocialIcon } from "react-social-icons";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    Logout();
  }

  render() {
    return (
      <nav className="level">
        <div className="level-left">
          <div className="level-item has-text-left">
            <div>
              <SocialIcon
                style={{ height: 25, width: 25 }}
                className="mr-1 ml-2"
                url="https://twitter.com/"
              />
              <SocialIcon
                style={{ height: 25, width: 25 }}
                className="mr-1"
                url="https://instagram.com/"
              />
              <SocialIcon
                style={{ height: 25, width: 25 }}
                url="https://youtube.com/"
              />
            </div>
          </div>
        </div>

        <div className="level-item has-text-centered">
          <div>
            <img src="./image/logo.png" alt="Logo" width="256" height="256" />
          </div>
        </div>

        <div className="level-right">
          <div className="level-item has-text-centered">
            <div>
              <a href="/login">
                <button
                  style={{ border: "solid 4px #070d59", color: "#070d59" }}
                  className="button"
                  onClick={this.handleSubmit}
                >
                  Logout
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
