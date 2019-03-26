import React, { Component } from 'react';
import Navbar from './Navbar';
import ClubInput from './ClubInput';
import ClubList from "./ClubList";
import './ClubApp.css';


class ClubApp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      clubs: [
             {
                id: 1,
                title: "Barca",
                about: "Mes que un club",
                keyplayers: ['Leo', 'Pique', 'Busquets'],
                img: "fcb.jpg"
              },
              {
                id: 2,
                title: "ManCity",
                about: "Manchester is Blue",
                keyplayers: ['Kun', 'De Bruyne', 'otamendi'],
                img: "mancity.jpg"
              },
              {
                id: 3,
                title: "Liverpool",
                about: "Red dragons",
                keyplayers: ['salah', 'mane', 'van dijk'],
                img: "lfc.jpg"
              }
        ],
        nextClubId: 3,
    };
  }
  
  render() {
    return (
      <div className="App">
      <Navbar />
      <ClubInput />
        <ClubList clubs={this.state.clubs}/>
      </div>
    );
  }
}

export default ClubApp;
