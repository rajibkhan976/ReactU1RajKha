import React, { Component } from 'react';
import UserComponent from './UserComponent';

class DashboardComponent extends Component {

  constructor (props) {
    super(props);
    let username = '';
    this.state = {users: [
      'Robin','Lundin','Rajib','Hossain','Khan'
      ]
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

  render () {
    return (
      <div>
        <UserComponent users={this.state.users}/>

        <div className="card-two">
        <input className="form-control" type="text" onChange={this.handleInput}/> <br/> <br/>
        <button type="button" className="btn btn-success" onClick={this.addUser}>Add</button>  <br/> <br/>
        <button type="button" className="btn btn-danger" onClick={this.removeUser}>Remove</button>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
