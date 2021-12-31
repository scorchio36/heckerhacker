// This code is based on a tutorial, "Canvas with React.js" done by Lucas Miranda on Medium.com.

import React, {Component} from 'react';

const MASS = 25;
const G = 9.8;

class Canvas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      x: 0,
      y: 640,
      t: 0,
      x_vel: 0,
      y_vel: 0,
      init_x_vel: 0,
      init_y_vel: 0,
      total_vel: 0,
      kinetic_energy: 0
    };

    this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.paintGrid = this.paintGrid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {

      return (
        <div>
          <canvas width="960" height="640" id="myCanvas" ref={
          (el) => this._canvas = el
          }/>
          <p>X-position: {this.state.x}</p>
          <p>Y-position: {640 - this.state.y}</p>
          <p>V<sub>x</sub>: {this.state.x_vel}</p>
          <p>V<sub>y</sub>: {this.state.y_vel}</p>
          <p>V<sub>total</sub>: {this.state.total_vel}</p>
          <p>KE: {this.state.kinetic_energy}</p>

          <button onClick={this.handlePauseButtonClick}>Pause</button>
          <button onClick={this.handleResetButtonClick}>Reset</button>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="vx_init">Initial X Velocity: </label>
            <input type="text" name="vx_init" /><br/>
            <label htmlFor="vy_init" >Initial Y Velocity: </label>
            <input type="text" name="vy_init" />
            <input type="submit" onClick={this.handleGoButtonClick} />
          </form>
      </div>
    );
  }

  componentDidMount() {
    this.ctx = this._canvas.getContext('2d');

    this.setState(prevState => {
      return {
        ...prevState,
        x: 0,
        y: this._canvas.height
      };
    });

    this.paintGrid();
  }

  handleGoButtonClick() {

    const IntervalID = setInterval(() => {

      let prevXPos = this.state.x;
      let prevYPos = this.state.y;
      //update state
      this.setState(prevState => {
        return {
          ...prevState,
          t: prevState.t + 0.05,
          y: (0.5*G*(prevState.t*prevState.t) - ((this.state.init_y_vel)*prevState.t) + this._canvas.height),
          x: prevState.t*(this.state.init_x_vel)
        };
      });

      //update state
      this.setState(prevState => {
        return {
          ...prevState,
          intervalID: IntervalID,
          x_vel: (this.state.x - prevXPos)/0.05,
          y_vel: (-0.1)*(this.state.y - prevYPos)/0.05,
          total_vel: (Math.sqrt((this.state.x_vel*this.state.x_vel)+(this.state.y_vel*this.state.y_vel))),
          kinetic_energy: (0.5*MASS*this.state.total_vel*this.state.total_vel)
        };
      });

      this.ctx.beginPath();
      this.ctx.arc(this.state.x, this.state.y, 1, 0, 2*Math.PI);
      this.ctx.fillStyle = "green";
      this.ctx.fill();
      this.ctx.closePath();

    }, 10);


  }

  handlePauseButtonClick() {

    clearInterval(this.state.intervalID);

  }

  handleResetButtonClick() {


    this.ctx.clearRect(0,0, this._canvas.width, this._canvas.height);
    this.paintGrid();
    this.setState(prevState => {
      return {
      intervalID: 0,
        t: 0,
        y: 640,
        x: 0,
        x_vel: 0,
        y_vel: 0,
        init_x_vel: 0,
        init_x_vel: 0,
        total_vel: 0,
        kinetic_energy: 0
      };
    });

  }

  paintGrid() {


    // paint X grid
    for(let i = 0; i<this._canvas.width; i+=10) {

      this.ctx.beginPath();
      this.ctx.moveTo(i, this._canvas.height);
      this.ctx.lineTo(i, 0);
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
      this.ctx.closePath();
    }

    // paint Y grid
    for(let i = this._canvas.height; i>0; i-=10) {

      this.ctx.beginPath();
      this.ctx.moveTo(this._canvas.width, i);
      this.ctx.lineTo(0, i);
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
      this.ctx.closePath();
    }

  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState(prevState => {
      return {
        ...prevState,
        init_x_vel: event.target.vx_init.value,
        init_y_vel: event.target.vy_init.value
      };
    });
  }

}

export default Canvas;