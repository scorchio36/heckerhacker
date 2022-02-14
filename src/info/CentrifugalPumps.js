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
        <div>
          <h2>Notes</h2>
          <ul>
            <li>
              <h3>Links about Centrifugal Pumps:</h3>
              <ul>
                <li><a href="https://pumpschool.com/">Pump School</a></li>
                <li><a href="https://www.montgomerycountymd.gov/mcfrs-psta/Resources/Files/Driver/20150325/UnitKBEngines/Engine_Manual/Training%20Supplements%20Spring%202019/Module%204%20-%20Centrifugal%20Fire%20Pumps.pdf">Fire Apparatus Pump Operations, Mechanics, and Components Plain Water Operations</a></li>
                <li><a href="https://www.ksb.com/centrifugal-pump-lexicon/axial-thrust/191862/">Axial Thrust</a></li>
                <li><a href="https://www.youtube.com/c/cornellpumpcompany/videos">Youtube-Cornell Pump</a></li>
                <li><a href="https://www.processtechacademy.com/the-stuff-in-a-centrifugal-pump-stuffing-box/">THE “STUFF” IN A CENTRIFUGAL PUMP “STUFFING BOX”</a></li>
                <li><a href="https://www.gardnerdenver.com/en-us/oberdorfer/about-us/download-center">GardnerDenver - Website with Centrifugal Pump Spec Sheets</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CentrifugalPumps;
