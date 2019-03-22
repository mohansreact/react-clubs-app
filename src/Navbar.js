import React, {Component} from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return(
            <header>
                <h2><a>Club App</a></h2>
                <nav>
                    <li><a>New Club</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
            </nav>
            </header>
        );
    }
}

export default Navbar;