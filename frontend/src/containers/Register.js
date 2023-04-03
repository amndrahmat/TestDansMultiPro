import React from "react";
import { RegisterPost } from "../constants/Method";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confPassword: "",
      errorValidate: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.nameValidation = this.nameValidation.bind(this);
  }

  nameValidation() {
    const regex = /^([a-zA-Z]).{5,}$/i;
    return !(!this.state.name || regex.test(this.state.name) === false);
  }

  passwordValidation() {
    const regex = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;
    return !(!this.state.password || regex.test(this.state.password) === false);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      errorValidate: "",
    });

    const isNameValid = this.nameValidation();
    const isPasswordValid = this.passwordValidation();

    if (!isNameValid) {
      this.setState({
        errorValidate: "Minimum name five characters",
      });
      return;
    }
    if (!isPasswordValid) {
      this.setState({
        errorValidate:
          "Minimum password eight characters, at least one uppercase letter, one lowercase letter and one number",
      });
      return;
    }
    RegisterPost(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.confPassword
    );
  }

  render() {
    return (
      <div>
        <section className="hero has-background-grey-light is-fullwidth">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-4-desktop">
                  <form onSubmit={this.handleSubmit} className="box">
                    <div className="field mt-5">
                      <label className="label">Name</label>
                      <div className="controls">
                        <input
                          name="name"
                          type="text"
                          className="input"
                          value={this.state.name}
                          onChange={this.handleInputChange}
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="field mt-5">
                      <label className="label">Email</label>
                      <div className="controls">
                        <input
                          name="email"
                          type="email"
                          className="input"
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          placeholder="test@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="field mt-5">
                      <label className="label">Password</label>
                      <div className="controls">
                        <input
                          name="password"
                          type="password"
                          className="input"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          placeholder="********"
                        />
                      </div>
                    </div>
                    <div className="field mt-5">
                      <label className="label">Confirm Password</label>
                      <div className="controls">
                        <input
                          name="confPassword"
                          type="password"
                          className="input"
                          value={this.state.confPassword}
                          onChange={this.handleInputChange}
                          placeholder="********"
                        />
                      </div>
                    </div>
                    <p>{this.state.errorValidate}</p>
                    <div className="field mt-5">
                      <button
                        className="button is-fullwidth"
                        style={{ background: "#070D59", color: "#fff" }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
