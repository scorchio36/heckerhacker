import React, {Component} from 'react';
import './SideMenu.css';
import {NavLink} from 'react-router-dom';

/* This is a navigation menu to go to different pages in the website.

onClick hamburgercallback is used to close the menu whenever one of the
menu links is clicked. This is just for convenience. This function is passed
in as a prop by App component. */

class SideMenu extends Component {

  render() {
    return (
      <div className="sidemenu" style={{left: this.props.menuOffset}}>
        <ul>
          <NavLink to="/centrifugal_pumps" onClick={this.props.hamburgercallback}><li>Centrifugal Pumps</li></NavLink>
          <NavLink to="/data_science" onClick={this.props.hamburgercallback}><li>Data Science</li></NavLink>
          <NavLink to="/fundamental_analysis" onClick={this.props.hamburgercallback}><li>Fundamental Analysis</li></NavLink>
          <NavLink to="/music_production" onClick={this.props.hamburgercallback}><li>Electronic Music Production</li></NavLink>
          <NavLink to="/neurology" onClick={this.props.hamburgercallback}><li>Neurology</li></NavLink>
          <NavLink to="/robotics" onClick={this.props.hamburgercallback}><li>Robotics</li></NavLink>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
