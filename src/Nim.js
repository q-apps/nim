import React, { Component } from 'react';

class Nim extends Component {
  constructor (props) {
    super(props)
    this.state = {
      barsCount: this.props.count,
      currentPlayer : 1
    }
  }

  removeBars (amount) {
    this.setState({
      barsCount: this.state.barsCount - amount,
      currentPlayer: 3 - this.state.currentPlayer
    })
  }

  render () {
    var barsView = " "
    for (var i = 0; i < this.state.barsCount; i++ ) {
      barsView +="|"

    }
    return (
      <div>
        <div id="stats">
          <p><h3>Палочек на столе: {this.state.barsCount}</h3></p>
          <p><h4>Ходит игрок {this.state.currentPlayer}</h4></p>
        </div>
        <div id="bars">
        <h3>{barsView}</h3>
        </div>
        <div id="buttons">
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={() => {this.removeBars(1)}}>1</button>
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={() => {this.removeBars(2)}}>2</button>
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={() => {this.removeBars(3)}}>3</button>
        </div>
      </div>
    )
  }
}

export default Nim;
