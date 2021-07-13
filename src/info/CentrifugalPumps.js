import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_CENTRIFUGAL_PUMPS = require('./DATA_CENTRIFUGAL_PUMPS.json');

class CentrifugalPumps extends Component {


  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_CENTRIFUGAL_PUMPS)
    }
  }
  render() {

    return (

      <div>
        <h1>Resources/Notes for Centrifugal Pumps</h1>
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

export default CentrifugalPumps;
