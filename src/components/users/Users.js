import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: "2",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
      {
        id: "3",
        login: "vanpelt",
        avatar_url: "https://avatars1.githubusercontent.com/u/17?v=4",
        html_url: "https://github.com/vanpelt",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <div key={user.id} className="card text-center">
            {/* <UserItem user={user} /> */}
            <img
              src={user.avatar_url}
              alt="avatar"
              className="img round-img"
              style={{ width: "160px" }}
            />
            <h3>{user.login}</h3>
            <a href={user.html_url} className="btn btn-dark btn-sm my-1">
              More
            </a>
          </div>
        ))}
      </div>
    );
  }

  // return (
  //     <div>
  //       {this.state.users.map((user) => (
  //         <div className="card text-center">
  //           <img
  //             src={user.avatar_url}
  //             alt="user avatar"
  //             className="img round-img"
  //             style={{ width: "160px" }}
  //           />
  //           <h3>{user.login}</h3>
  //         </div>
  //       ))}
  //     </div>
  //   );
}

export default Users;
