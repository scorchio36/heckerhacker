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
            <li>
              <a href="https://www.quora.com/Is-cost-loss-function-calculated-for-each-training-example-and-then-update-weights-or-is-it-calculated-as-average-over-the-whole-dataset-or-batch-and-then-the-weights-are-updated">Great explanation of different Gradient Descent Algorithms</a>
            </li>

            <li>
              <h4>Virtual Environments</h4>
              <p>
                Python allows you to set up a virtual environment. This is a self-contained python directory that maintains it's own separate interpreter
                environment and set of externally downloaded python packages. You can create and run your project solely within this environment, completely
                separate of the global python setup on the system. This prevents conflicts when a project needs certain versions of python packages to run
                properly, while allowing other versions of packages to be installed globally on the system. <br/><br/>

                It's also a nice way to pre-package and distribute a project. You can freeze the list of packages needed for the project in a
                'requirements.txt file.' Then you can ship this file along with the project so that users know what packages and what versions of those
                packages need to be installed so that the program runs properly. <br/><br/>

                Details of setting up a virtual environment can be found <a href="https://docs.python.org/3/tutorial/venv.html">here</a>.
              </p><br/><br/>

              <h5>Quick Steps to Setup New Directory and Environment Named 'tutorial-env'</h5>
              <ol>
                <li>Run command: <code>'python -m venv tutorial-env'</code> </li>
                <li>
                    On Windows, run <code>'tutorial-env\Scripts\activate.bat'</code>. <br/><br/>
                    On Unix, run <code>'source tutorial-env/bin/activate'</code>
                </li>
                <li>Install required packages with pip. View them with <code>'pip list'</code>.</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DataScience;
