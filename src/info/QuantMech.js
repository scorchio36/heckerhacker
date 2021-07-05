import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_QUANT_MECH = require('./DATA_QUANT_MECH.json');

class QuantMech extends Component {


  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_QUANT_MECH)
    }
  }
  render() {

    return (

      <div>
        <h1>Resources/Notes for QuantMech</h1>
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

export default QuantMech;
