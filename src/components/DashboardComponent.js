import React, { Component } from 'react';
import UserComponent from './UserComponent';
import WrapperComponent from './WrapperComponent';

class DashboardComponent extends Component {

  constructor (props) {
    super(props);
    let username = '';
    this.state = {users: [
      'Pelle','Kalle'
    ],
    color: 'blue'
    };
  }

  handleInput = (e) => {
    this.username = e.target.value;
    console.log(this.username);
  }

  addUser = (e) => {
    this.setState(prevState => ({users: [...prevState.users, this.username]}));
  }

  removeUser = (e) => {
    this.setState(prevState => prevState.users.pop());
  }

  toggleColor = (e) => {
    this.setState({color: (this.state.color === 'blue') ? 'red' : 'blue'});
  }

  render () {
    return (
      <WrapperComponent
      left={<UserComponent users={this.state.users} textColor={this.state.color} toggleTextColor={this.toggleColor}/>}
      right={(
        <div>
          <input className="form-control" type="text" onChange={this.handleInput}/> <br/>
          <button type="button" className="btn btn-success btn-block" onClick={this.addUser}>Add</button>  <br/>
          <button type="button" className="btn btn-danger btn-block" onClick={this.removeUser}>Remove</button>
        </div>
      )}>
      </WrapperComponent>
    );
  }
}

export default DashboardComponent;
