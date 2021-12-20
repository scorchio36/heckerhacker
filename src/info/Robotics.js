import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_ROBOTICS = require('./DATA_ROBOTICS.json');

class Robotics extends Component {


  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_ROBOTICS)
    }
  }
  render() {

    return (

      <div>
        <h1>Resources/Notes for Robotics</h1><hr/>
        <div>
          <h2>Vocab</h2>
          <ul>
            {this.state.definitionComponents}
          </ul>
        </div>
        <div>
          <h2>Notes</h2>
        </div>
      </div>
    );
  }
}

export default Robotics;
