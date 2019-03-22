import React, {Component} from 'react';
import Club from './Club';
import PropTypes from 'prop-types';
import './ClubList.css';

class ClubList extends Component {
  static defaultProps = {
    clubs: [
            {
                title: "Barca",
                about: "Mes que un club",
                keyplayers: ['Leo', 'Pique', 'Busquets'],
                img: "fcb.jpg"
            },
            {
                title: "ManCity",
                about: "Manchester is Blue",
                keyplayers: ['Kun', 'De Bruyene', 'otamendi'],
                img: "mancity.jpg"
            },
            {
                title: "Liverpool",
                about: "Red dragons",
                keyplayers: ['salah', 'mane', 'van dijk'],
                img: "lfc.jpg"
            }
        ]
  }
  
  static propTypes = {
    clubs: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  
  render() {
    const clubs = this.props.clubs.map((c,index) => (
      <Club key={index} {...c} />
    ));
    
    return (
      <div className="club-list">
        {clubs}
      </div>
    );
  
  }
}

export default ClubList;