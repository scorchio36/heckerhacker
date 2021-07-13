import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, {Component} from 'react';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import MusicProd from './info/MusicProd';
import SideMenu from './SideMenu';
import QuantMech from './info/QuantMech';
import Javascript from './info/Javascript';
import CentrifugalPumps from './info/CentrifugalPumps';
import Home from './Home';
const SIDEMENU_OFFSCREEN_OFFSET = "-290px"; // How many pixels until the sidemenu is completely off-screen (may need to be adjusted for different devices)

/* Main container for the whole application. All components in my project will be children of App
and the App component is the top-level component that is rendered to the root div in index.html. */

class App extends Component {

  constructor(props) {
    super(props);

    // State keeps track of whether sidemenu is visible on mobile.
    this.state = {
      menuVisible: false,
      menuOffset: SIDEMENU_OFFSCREEN_OFFSET
    };

    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Header hamburgercallback={this.toggleMenuVisibility}/>
          <div className="main-content">
            <SideMenu menuOffset={this.state.menuOffset} hamburgercallback={this.toggleMenuVisibility}/>
            <div className="content">
              <Route exact path="/" component={ Home } />
              <Route path="/music_production" component={ MusicProd } />
              <Route path="/quantum_mechanics" component={ QuantMech } />
              <Route path="/javascript" component={ Javascript } />
              <Route path="/centrifugal_pumps" component={ CentrifugalPumps } />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }

  // updates state in order to reveal or hide sidemenu on mobile devices
  toggleMenuVisibility() {

    if(this.state.menuVisible) {
      this.setState({
        menuVisible: false,
        menuOffset: SIDEMENU_OFFSCREEN_OFFSET
      });
    }
    else {
      this.setState({
        menuVisible: true,
        menuOffset: "0px"
      });
    }
  }
}

export default App;
