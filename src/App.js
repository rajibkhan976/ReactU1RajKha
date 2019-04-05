import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardComponent from './components/DashboardComponent';
import UserComponent from './components/UserComponent';
import WrapperComponent from './components/WrapperComponent';

class App extends Component {
  render() {
    return (
        <DashboardComponent/>
    );
  }
}

export default App;
