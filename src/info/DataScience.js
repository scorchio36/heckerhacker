import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_DATA_SCIENCE = require('./DATA_DATA_SCIENCE.json');

class DataScience extends Component {


  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_DATA_SCIENCE)
    }
  }
  render() {

    return (

      <div>
        <h1>Resources/Notes for Data Science</h1>
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

export default DataScience;
