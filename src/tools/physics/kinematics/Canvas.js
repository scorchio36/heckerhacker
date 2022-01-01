// This code is based on a tutorial, "Canvas with React.js" done by Lucas Miranda on Medium.com.

import React, {Component} from 'react';

const MASS = 25;
const G = 9.81; // gravitational constant on Earth
const TIME_STEP = 0.01; // how much time should move forward on each setInterval call

class Canvas extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0, // required to start and stop setInterval function executions
      x: 0, // current horizontal position of the projectile
      y: 640, // current vertical position of the the projectile
      t: 0, // this time variable parametrizes the position values. It is fed into the equations as an independent variable to determine the x and y positions of the projectile.
      x_vel: 0, // current horizontal velocity component
      y_vel: 0, // current vertical velocity component
      init_x_vel: 0, // initial horizontal starting velocity of the projectile from its launch point
      init_y_vel: 0, // initial vertical starting velocity of the projectile from its launch point
      total_vel: 0, // the vector sum of the horizontal and vertical velocity components of the projectile
      max_y_height: 0, // the vertical position of the highest point reached by the projectile
      max_y_height_x_pos: 0, // the horizontal position of the highest point reached by the projectile
      kinetic_energy: 0 // current kinetic energy of the projectile
    };

    this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.paintGrid = this.paintGrid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render() {

      /* use the ref attribute to grab a reference of the rendered canvas. This will be
       used to get the canvas context. */
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
          <p>time: {this.state.t}</p>
          <p>KE: {this.state.kinetic_energy}</p>

          <button onClick={this.handlePauseButtonClick}>Pause</button>
          <button onClick={this.handleResetButtonClick}>Reset</button>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="vx_init">Initial X Velocity: </label>
            <input type="text" name="vx_init" /><br/>
            <label htmlFor="vy_init" >Initial Y Velocity: </label>
            <input type="text" name="vy_init" />
            <input type="submit" onClick={this.handleGoButtonClick} value="Simulate"/>
          </form>
      </div>
    );
  }

  componentDidMount() {

    // grab the canvas context so we can start drawing on the canvas
    this.ctx = this._canvas.getContext('2d');

    /* The vertical of the canvas reference frame is flipped with respect to the typical
    Euclidian vertical that we deal with in physics. I would like the projectile to be placed
    at what is considered the Euclidian origin. The canvas height, however, is not available until
    the component has mounted. So that's why I update the state here.*/
    this.setState(prevState => {
      return {
        ...prevState,
        x: 0,
        y: this._canvas.height
      };
    });

    // paint a grid onto the canvas and label with values
    this.paintGrid();
  }

  // runs when the 'simulate' button is pressed
  handleGoButtonClick() {

    // we need to store this IntervalID to give the clearInterval function
    const IntervalID = setInterval(() => {

      // used to calculate velocity of each respective component.
      // Stores the current x and y right before they get updated in the first
      // setState. Those updated values are then compared to these saved ones and
      // divided by the timestep so we get velocity.
      let prevXPos = this.state.x;
      let prevYPos = this.state.y;

      // if you use the prevState.t here, you can use the previous time value to calucalate the current x an y, but
      // you can also update the current time value in the same setState call.
      this.setState(prevState => {
        return {
          ...prevState,
          t: prevState.t + TIME_STEP,
          y: (0.5*G*(prevState.t*prevState.t) - ((this.state.init_y_vel)*prevState.t) + this._canvas.height), // y(t) = -(1/2)(g)(t^2) + (V_oy)(t) + (y_init)
          x: prevState.t*(this.state.init_x_vel) // x(t) = (V_ox)(t) + (x_init)
        };
      });

      //update state
      this.setState(prevState => {
        return {
          ...prevState,
          intervalID: IntervalID,
          x_vel: (this.state.x - prevXPos)/TIME_STEP,
          y_vel: (-0.1)*(this.state.y - prevYPos)/TIME_STEP,
          total_vel: (Math.sqrt((this.state.x_vel*this.state.x_vel)+(this.state.y_vel*this.state.y_vel))),
          max_y_height: Math.max((this._canvas.height-this.state.y), (prevState.max_y_height)),
          kinetic_energy: (0.5*MASS*this.state.total_vel*this.state.total_vel)
        };
      });

      // grab the X-position of the highest point
      if (this.state.y_vel < 0 && this.state.max_y_height_x_pos==0) {
        this.setState(prevState => {
          return {
            ...prevState,
            max_y_height_x_pos: this.state.x
          }
        });

      }

      this.ctx.beginPath();
      this.ctx.arc(this.state.x, this.state.y, 1, 0, 2*Math.PI);
      this.ctx.fillStyle = "green";
      this.ctx.fill();
      this.ctx.closePath();

      // check if ball is back on the ground
      if (this._canvas.height-this.state.y < 0.001 && (this._canvas.height-this.state.y != 0)) {

        clearInterval(this.state.intervalID);

        // write out the max height on the screen
        this.ctx.font = '12px serif';
        this.ctx.strokeStyle = "red";
        this.ctx.strokeText("Max Height: (" + this.state.max_y_height_x_pos + "," + this.state.max_y_height + ")", this.state.max_y_height_x_pos, this._canvas.height-this.state.max_y_height-20);

        this.ctx.beginPath();
        this.ctx.arc(this.state.max_y_height_x_pos, this._canvas.height-this.state.max_y_height, 5, 0, 2*Math.PI);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
      }

    }, 4);


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
        init_y_vel: 0,
        total_vel: 0,
        max_y_height: 0,
        max_y_height_x_pos: 0,
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

      if(i%100 == 0) {
        // label the graph
        this.ctx.font = '12px serif';
        this.ctx.strokeStyle = "black";
        this.ctx.strokeText(i, i, this._canvas.height);
      }
    }

    // paint Y grid
    for(let i = this._canvas.height; i>0; i-=10) {

      this.ctx.beginPath();
      this.ctx.moveTo(this._canvas.width, i);
      this.ctx.lineTo(0, i);
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
      this.ctx.closePath();

      if(i%100 == 0) {
        // label the graph
        this.ctx.font = '12px serif';
        this.ctx.strokeStyle = "black";
        this.ctx.strokeText(640-i, 0, i);
      }
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
