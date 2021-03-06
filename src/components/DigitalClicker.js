import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesClicked: 0
    };
  }

  clickHandler = (event) => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }
  render() {
    return (
      <button onClick={this.clickHandler}>
      <label>{this.state.timesClicked}</label>
      </button>
    );
  }

}

export default DigitalClicker;
