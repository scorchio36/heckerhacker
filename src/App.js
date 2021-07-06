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
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      menuOffset: "-290px"
    };

    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  render() {
    return (
      <div className="main-content">
        <HashRouter>
          <Header hamburgercallback={this.toggleMenuVisibility}/>
          <SideMenu menuOffset={this.state.menuOffset} hamburgercallback={this.toggleMenuVisibility}/>
          <div className="content">
            <Route exact path="/" component={ Home } />
            <Route path="/music_production" component={ MusicProd } />
            <Route path="/quantum_mechanics" component={ QuantMech } />
            <Route path="/javascript" component={ Javascript } />
          </div>
        </HashRouter>
      </div>
    );
  }

  toggleMenuVisibility() {

    console.log("CLICK!");

    if(this.state.menuVisible) {
      this.setState({
        menuVisible: false,
        menuOffset: "-290px"
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
