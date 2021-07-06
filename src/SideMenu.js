import React, {Component} from 'react';
import './SideMenu.css';
import {NavLink} from 'react-router-dom';

class SideMenu extends Component {

  render() {
    return (
      <div className="sidemenu" style={{left: this.props.menuOffset}}>
        <ul>
          <NavLink to="/music_production" onClick={this.props.hamburgercallback}><li>Electronic Music Production</li></NavLink>
          <NavLink to="/quantum_mechanics" onClick={this.props.hamburgercallback}><li>Quantum Mechanics</li></NavLink>
          <NavLink to="/javascript" onClick={this.props.hamburgercallback}><li>Javascript</li></NavLink>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
