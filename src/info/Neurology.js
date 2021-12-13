import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_NEUROLOGY = require('./DATA_NEUROLOGY.json');

class Neurology extends Component {


  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_NEUROLOGY)
    }
  }
  render() {

    return (

      <div>
        <h1>Resources/Notes for Neurology</h1>
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

export default Neurology;
