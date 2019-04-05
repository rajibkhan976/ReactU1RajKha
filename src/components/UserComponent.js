import React, { Component } from 'react';

class UserComponent extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const users = this.props.users;
    console.log(typeof users);
    return (
        <ul className="list-group">
          {users.map((user, key) =>
            <li className="list-group-item" style={{color: this.props.textColor}} key={key}>{user}</li>
          )}
            <br/>
            <button type="button" className="btn btn-primary" onClick={this.props.toggleTextColor}>Toggle Colors</button>
        </ul>
    );
  }
}

export default UserComponent;
