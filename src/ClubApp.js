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
                id: 0,
                title: "Barca",
                about: "Mes que un club",
                keyplayers: ['Leo', 'Pique', 'Busquets'],
                img: "fcb.jpg"
              },
              {
                id: 1,
                title: "ManCity",
                about: "Manchester is Blue",
                keyplayers: ['Kun', 'De Bruyne', 'otamendi'],
                img: "mancity.jpg"
              },
              {
                id: 2,
                title: "Liverpool",
                about: "Red dragons",
                keyplayers: ['salah', 'mane', 'van dijk'],
                img: "lfc.jpg"
              }
        ],
        nextClubId: 3,
    };
    this.handleSave = this.handleSave.bind(this);
  }
  
  
  handleSave(club) {
    this.setState((prevState, props) => {
      const newClub = {...club, id: this.state.nextClubId};
      return {
        nextClubId: prevState.nextClubId + 1,
        clubs: [...this.state.clubs, newClub]
      }
    });
  }
  
  render() {
    return (
      <div className="App">
      <Navbar />
      <ClubInput  onSave={this.handleSave}/>
        <ClubList clubs={this.state.clubs}/>
      </div>
    );
  }
}

export default ClubApp;
