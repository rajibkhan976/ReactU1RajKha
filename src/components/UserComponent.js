import React, { Component } from 'react';

class UserComponent extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const users = this.props.users;
    console.log(typeof users);
    return (
      <div className="card-one">
        <ul>
          {users.map((user, key) =>
            <li key={key}>{user}</li>
          )}
        </ul>
        <button type="button" className="btn btn-primary" onClick={this.toggleColor}>Toggle Colors</button>
      </div>
    );
  }
}

export default UserComponent;
