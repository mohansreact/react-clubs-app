import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Navbar.css";

class Navbar extends Component {
    static defaultProps = {
        onNewClub() {}
    }
    
    static propTypes = {
        onNewClub: PropTypes.func
    }
    
    render() {
        return(
            <header>
                <h2><a>Club App</a></h2>
                <nav>
                    <li><a onClick={this.props.onNewClub}>New Club</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
            </nav>
            </header>
        );
    }
}

export default Navbar;