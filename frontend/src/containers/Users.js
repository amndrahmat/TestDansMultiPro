import React, { setState } from "react";
import Layout from "../components/Layout";
import { refreshToken, getUsers, getAllUsers } from "../constants/Method";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    refreshToken();
    getUsers().then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <Layout>
        <div className="container">
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

export default Users;
