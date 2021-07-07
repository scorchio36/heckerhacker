import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper'; // function used to generate Vocab section
const DATA_MUSIC_PROD = require('./DATA_MUSIC_PROD.json');


class MusicProd extends Component {

  constructor(props) {
    super(props);


    /* definitionComponents stores the Definition Components passed from VocabHelper.
       The components are already formatted and placed into an array during the call to
      the helper. All that is needed is to place this returned component list into an
      unordered list element. Since a Vocab section will appear in every info page, this
      info page format will need to be generalized at some point.*/
    this.state = {
      definitionComponents: getVocabSection(DATA_MUSIC_PROD)
    };


  }

  render() {

    return (

      <div>
        <h1>Resources/Notes for Music Production</h1> <hr/>
        <div>
          <h2>Vocab</h2>
          <ul>
            {this.state.definitionComponents}
          </ul><hr/>
        </div>
      </div>

    );
  }


}




export default MusicProd;
