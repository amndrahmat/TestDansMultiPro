import React from "react";
import { getJobList, getJobListId } from "../constants/Method";

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
    };
  }

  receivedData() {
    let jobId = window.localStorage.getItem("jobId");
    getJobListId(jobId).then((res) => {
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
                      {slice.map((data, index) => (
                        <div class="tile is-ancestor mt-1 ml-1 mr-1">
                          <div class="tile is-parent">
                            <article class="tile is-child box has-text-centered">
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
                              <p
                                class="title"
                                style={{ color: "#000", marginTop: "5px" }}
                              >
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

  componentDidMount() {
    this.receivedData();
  }

  render() {
    return <div>{this.state.postData}</div>;
  }
}

export default JobList;
