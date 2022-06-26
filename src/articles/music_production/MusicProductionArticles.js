import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class MusicProductionArticles extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div>
        <h1>Articles Related to Music Production</h1>
        <ul>
          <NavLink to="/articles/music_production/mixing"><li>My Steps During Mixing</li></NavLink>
        </ul>
      </div>
    );
  }
}

export default MusicProductionArticles;
