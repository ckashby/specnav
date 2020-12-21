import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { login, html_url, avatar_url } = this.props;

    return (
      <div className="card text-center">
        <h1>{this.props.html_url}</h1>
      </div>
    );
  }
}

export default UserItem;
