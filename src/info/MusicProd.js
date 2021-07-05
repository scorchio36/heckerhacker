import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_MUSIC_PROD = require('./DATA_MUSIC_PROD.json');


class MusicProd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_MUSIC_PROD)
    };


  }

  render() {

    return (

      <div>
        <h1>Resources/Notes for Music Production</h1>
        <div>
          <h2>Vocab</h2>
          <ul>
            {this.state.definitionComponents}
          </ul>
        </div>
      </div>

    );
  }


}




export default MusicProd;
