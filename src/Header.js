import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

/* consists of a logo and a hamburger menu that only appears on mobile devices. The menu
is used to open the left-side navigation bar/sidemenu.

onClick function on hambger-menu is passed in by the parent (App). Clicking on the icon
will send a message back to App to call a function that slides the menu in and out.*/

class Header extends Component {

  render() {
    return (
      <div id="header">
        <img id="hamburger-menu"src="./hamburger_menu_icon.png" width="40px" onClick={this.props.hamburgercallback}/>
        <a href="https://www.heckerhacker.com/home"><img className="header-logo" src="./hecker_hacker_home_logo.png"/></a>
        <NavLink to="/articles"><li>Articles</li></NavLink>
        <a href="#">Info Pages</a>
        <a href="#">Projects</a>
      </div>
    );
  }
}

export default Header;
