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
import DataScience from './info/DataScience';
import Neurology from './info/Neurology';
import FundamentalAnalysis from './info/FundamentalAnalysis';
import Robotics from './info/Robotics';
import Home from './Home';
import Articles from './articles/Articles.js';
import ProjectileMotionSimContainer from './tools/physics/kinematics/ProjectileMotionSimContainer';
import MusicProductionArticles from './articles/music_production/MusicProductionArticles.js';
import Mixing from './articles/music_production/Mixing.js'
const SIDEMENU_OFFSCREEN_OFFSET = "-290px"; // How many pixels until the sidemenu is completely off-screen (may need to be adjusted for different devices)

/* Main container for the whole application. All components in my project will be children of App
and the App component is the top-level component that is rendered to the root div in index.html. */

class App extends Component {

  constructor(props) {
    super(props);

    // State keeps track of whether sidemenu is visible on mobile.
    this.state = {
      menuVisible: false,
      menuOffset: SIDEMENU_OFFSCREEN_OFFSET,
      menuOptions: ["Resource Pages", "Articles", "Projects", "Tools"],
      currentMenuIndex: 0
    };

    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
    this.updateMenuLeft = this.updateMenuLeft.bind(this);
    this.updateMenuRight = this.updateMenuRight.bind(this);
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Header hamburgercallback={this.toggleMenuVisibility}/>
          <div className="main-content">
            <SideMenu menuOffset={this.state.menuOffset} hamburgercallback={this.toggleMenuVisibility} updateMenuLeft={this.updateMenuLeft} updateMenuRight={this.updateMenuRight} menuCategory={this.state.menuOptions[this.state.currentMenuIndex]}/>
            <div className="content">
              <Route exact path="/" component={ Home } />
              <Route path="/centrifugal_pumps" component={ CentrifugalPumps } />
              <Route path="/data_science" component={ DataScience } />
              <Route path="/fundamental_analysis" component={ FundamentalAnalysis } />
              <Route path="/music_production" component={ MusicProd } />
              <Route path="/neurology" component={ Neurology } />
              <Route path="/tools/physics/kinematics/projectile_motion_sim" component={ProjectileMotionSimContainer} />
              <Route path="/quantum_mechanics" component={ QuantMech } />
              <Route path="/robotics" component={Robotics} />
              <Route path="/articles" component={Articles} />
              <Route path="/articles/music_production" component={MusicProductionArticles} />
              <Route path="/articles/music_production/mixing" component={Mixing} />
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

  updateMenuLeft() {


    let newIndex = this.state.currentMenuIndex;
    newIndex--;
    console.log(newIndex);
    if(newIndex < 0) {
      newIndex = this.state.menuOptions.length-1;
    }

    this.setState({
      ...this.state,
      currentMenuIndex: newIndex
    });
  }

  updateMenuRight() {

    let newIndex = this.state.currentMenuIndex;
    newIndex++;
    console.log(newIndex);
    if(newIndex > (this.state.menuOptions.length-1)) {
      newIndex = 0;
    }

    this.setState({
      ...this.state,
      currentMenuIndex: newIndex
    });
  }
}

export default App;
