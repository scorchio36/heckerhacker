import React, {Component} from 'react';
import Definition from './Definition';
const DATA_MUSIC_PROD = require('./DATA_MUSIC_PROD.json');

class MusicProd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: []
    };

    this.renderDefinitions = this.renderDefinitions.bind(this);

    this.renderDefinitions();

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

  renderDefinitions() {

    let tempObj = DATA_MUSIC_PROD.terms;
    for(const dataTerm in tempObj) {
      this.setState({
        definitionComponents: this.state.definitionComponents.push(
          <Definition term={tempObj[dataTerm].word} definition={tempObj[dataTerm].definition} links={tempObj[dataTerm].links} key={tempObj[dataTerm].word}/>
        )
      });
    }
  }


}




export default MusicProd;
