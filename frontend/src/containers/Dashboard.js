import React, { setState } from "react";
import Layout from "../components/Layout";
import { refreshToken, getUserById } from "../constants/Method";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const email = localStorage
      .getItem("email")
      .substring(1, localStorage.getItem("email").length - 1);
    refreshToken();

    getUserById(email).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <Layout>
        <div className="container">
          <h1>WELCOME BACK...</h1>

          <table className="table is-striped is-fullwidth">
            <thead>
              <th></th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}

export default Dashboard;
