import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this); // Bind here
  }

  // Handler for keydown events; moves the ball 5px to the right when the Right Arrow key is pressed.
  handleKeyDown(event) {
    if (event.keyCode === 39 && this.state.renderBall) {
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: newPos + "px" }
        };
      });
    }
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
