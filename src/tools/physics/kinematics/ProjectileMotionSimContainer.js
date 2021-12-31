import React, {Component} from 'react';
import ProjectileMotionSim from './ProjectileMotionSim.js';
import Canvas from './Canvas.js';

// The sim container will contain all of the data about the content in the canvas as well as pass the canvas into
// the simulator component so the component may act upon the canvas.

class ProjectileMotionSimContainer extends Component {

  render() {

    return (

      <div>
        <h2>Projectile Motion Simulator</h2>
        <Canvas />
      </div>
    );
  }
}

export default ProjectileMotionSimContainer;
