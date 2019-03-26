import React, {Component} from 'react';
import Club from './Club';
import PropTypes from 'prop-types';
import './ClubList.css';

class ClubList extends Component {
 
  static propTypes = {
    clubs: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }
  
  render() {
    const {onDelete} = this.props;
    const clubs = this.props.clubs.map((c,index) => (
      <Club key={c.id} {...c} onDelete= {onDelete} />
    ));
    
    return (
      <div className="club-list">
        {clubs}
      </div>
    );
  
  }
}

export default ClubList;