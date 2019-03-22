import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Club.css";


class Club extends Component {
    static propTypes = {
    title: PropTypes.string.isRequired,
    keyplayers: PropTypes.arrayOf(PropTypes.string).isRequired,
    about: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }
    render() {
        const {title, img, about} = this.props;
        const keyplayers = this.props.keyplayers.map((player, index) => (
            <li key={index}>{player}</li>
            ));
        return (
      <div className="club-card">
        <div className="club-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="club-card-content">
          <h3 className="club-title">{title}</h3>
          <h4>Keyplayers:</h4>
          <ul>
            {keyplayers}
          </ul>
          <h4>About:</h4>
          <p>{about}</p>
        </div>
        
      </div>
    );
    }
}

export default Club;