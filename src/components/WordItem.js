import React, { Component } from 'react'

const ANIMATION_MS = 300
const VELOCITY = 0.015

function float2position(x) {
  return "" + (10 + 80 * x) + "%"
}

function updateMovement(x, dx) {
  x = x + dx
  if (x < 0 || x > 1){
    dx = -dx
    x = x + 2 * dx
  }
  return [x, dx]
}

class WordItem extends Component {

  constructor(props, context) {
    super(props, context)
    const angle = 360 * Math.random()
    this.state = {
        x: Math.random(),
        y: Math.random(),
        dx: VELOCITY * Math.cos(angle),
        dy: VELOCITY * Math.sin(angle),
    }
    console.log(this.state.positionX, this.state.positionY)
    this.move = this.move.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.move(), ANIMATION_MS);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  move() {
    const [x, dx] = updateMovement(this.state.x, this.state.dx)
    const [y, dy] = updateMovement(this.state.y, this.state.dy)
    this.setState({
      x: x,
      y: y,
      dx: dx,
      dy: dy,
    })
  }

  render() {
    const styles = {
      position: 'absolute',
      top: float2position(this.state.y),
      left: float2position(this.state.x)
    };
    return (
      <div className="text-item" style={styles}>
        {
          this.props.text
        }
      </div>
    )
  }

}

export default WordItem
