import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div id="header">
        <img id="hamburger-menu"src="./hamburger_menu_icon.png" width="40px" onClick={this.props.hamburgercallback}/>
        <a href="https://www.heckerhacker.com/home"><img src="./hecker_hacker_home_logo.png" width="120px"/></a>
      </div>
    );
  }
}

export default Header;
