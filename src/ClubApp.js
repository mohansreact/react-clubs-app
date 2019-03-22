import React, { Component } from 'react';
import Navbar from './Navbar';
import ClubList from "./ClubList";
import './ClubApp.css';

class ClubApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <ClubList />
      </div>
    );
  }
}

export default ClubApp;
