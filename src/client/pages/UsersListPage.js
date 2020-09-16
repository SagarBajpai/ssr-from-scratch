import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    //this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    const list = this.renderUsers();

    return (
      <div>
        Here's a big List of users:
        <br />
        <ul>{list.length ? list : "...loading"}</ul>
      </div>
    );
  }
}

function mapStatesToProps(state) {
  return { users: state.users };
}

function loadOptions(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStatesToProps, { fetchUsers })(UsersList),
  loadOptions,
};
