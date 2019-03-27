import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardComponent from './components/DashboardComponent';
import UserComponent from './components/UserComponent';
import WrapperComponent from './components/WrapperComponent';

class App extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-warning">
          <h2>ReactU3RajKha</h2>
        </div>
      </div>
      <div className="row">
        <DashboardComponent/>
      </div>
      <div className="row">
        <UserComponent/>
      </div>
      <div className="row">
        <WrapperComponent/>
      </div>
    </div>
    );
  }
}

export default App;
