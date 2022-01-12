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

        <div>
          <h2>Notes</h2>
          <ul>
            <li><a href="https://www.quora.com/Is-cost-loss-function-calculated-for-each-training-example-and-then-update-weights-or-is-it-calculated-as-average-over-the-whole-dataset-or-batch-and-then-the-weights-are-updated">Great explanation of different Gradient Descent Algorithms</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DataScience;
