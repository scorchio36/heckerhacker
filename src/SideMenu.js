import React, {Component} from 'react';
import './SideMenu.css';
import {NavLink} from 'react-router-dom';

class SideMenu extends Component {

  render() {
    return (
      <div className="sidemenu">
        <ul>
          <NavLink to="/music_production"><li>Electronic Music Production</li></NavLink>
          <NavLink to="/quantum_mechanics"><li>Quantum Mechanics</li></NavLink>
          <NavLink to="/javascript"><li>Javascript</li></NavLink>
        </ul>
      </div>
    );
  }
}

export default SideMenu;
