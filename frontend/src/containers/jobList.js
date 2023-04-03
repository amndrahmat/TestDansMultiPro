import React, { useState } from "react";
import { getJobList, getJobListSearch } from "../constants/Method";

import ReactPaginate from "react-paginate";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
      search: "",
      email: "",
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.receivedData();
  }

  receivedData() {
    getJobList().then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = (
        <div>
          <section className="hero has-background-white-light is-fullwidth">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-12-desktop">
                    <section
                      class="hero is-medium is-link"
                      style={{ background: "#fff", marginBottom: "20px" }}
                    >
                      <div class="has-text-centered">
                        <p
                          class="title"
                          style={{ color: "#000", marginBottom: "15px" }}
                        >
                          Job List
                        </p>
                      </div>

                      {slice.map((data, index) => (
                        <div class="tile is-ancestor mt-6 ml-3 mr-3">
                          <div class="tile is-parent">
                            <article class="tile is-child box has-text-centered">
                              <img
                                className="img mb-3"
                                src="./image/OF1.png"
                                alt="OF1"
                                style={{ height: "150px" }}
                              />
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                                }}
                              >
                                <div className="d-flex justify-content-center align-items-center h-100">
                                  <p className="text-white mb-0">{data.type}</p>
                                </div>
                              </div>

                              <p class="title" style={{ color: "#000" }}>
                                {data.title}
                              </p>
                              <div class="content">
                                <p>{data.location}</p>
                              </div>
                            </article>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        postData,
      });
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  handleClick(id) {
    localStorage.setItem("test", JSON.stringify(id));
    window.location = "/joblistid";
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
    getJobListSearch(this.state.email).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = (
        <div>
          <section className="hero has-background-white-light is-fullwidth">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-12-desktop">
                    <section
                      class="hero is-medium is-link"
                      style={{ background: "#fff", marginBottom: "20px" }}
                    >
                      <div class="has-text-centered">
                        <p
                          class="title"
                          style={{ color: "#000", marginBottom: "15px" }}
                        >
                          Job List
                        </p>
                      </div>

                      {slice.map((data, index) => (
                        <div class="tile is-ancestor mt-6 ml-3 mr-3">
                          <div class="tile is-parent">
                            <article class="tile is-child box has-text-centered">
                              <img
                                className="img mb-3"
                                src="./image/OF1.png"
                                alt="OF1"
                                style={{ height: "150px" }}
                              />
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                                }}
                              >
                                <div className="d-flex justify-content-center align-items-center h-100">
                                  <p className="text-white mb-0">{data.type}</p>
                                </div>
                              </div>

                              <p class="title" style={{ color: "#000" }}>
                                {data.title}
                              </p>
                              <div class="content">
                                <p>{data.location}</p>
                              </div>
                            </article>
                          </div>
                        </div>
                      ))}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        postData,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <section className="hero has-background-white-light is-fullwidth">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-4-desktop">
                    <form onSubmit={this.handleSubmit} className="box">
                      <div className="field mt-2">
                        <div className="controls">
                          <input
                            name="email"
                            type="text"
                            className="input"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="search"
                            required
                          />
                        </div>
                      </div>

                      <div className="field mt-2">
                        <button
                          className="button is-fullwidth"
                          style={{ background: "#070D59", color: "#fff" }}
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {this.state.postData}
        <section className="hero has-background-white-light is-fullwidth">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-12-desktop">
                  <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default JobList;
