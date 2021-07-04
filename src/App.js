import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="main-content">
    <HashRouter>
      <SideMenu />
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

export default App;
