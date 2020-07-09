import React, { Component } from "react"
import "./App.css"

const WinMessage = () => <div className="message win-message">You Win!</div>

const LoseMessage = () => <div className="message lose-message">Sorry, try again.</div>;

const StreakMessage = props => <div className="message streak-message">You've won {props.value} time{+props.value !== 1 && "s"} in a row.</div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      streak: 0,
    };
  };
  
  componentDidMount = ()=>this.reset();

  reset = () => {
    this.setState({
      randomValue: Math.floor(Math.random() * 100),
      guess: -1,
      guessing: false,
      guessed: false,
      win: false,
    });
  };

  updateGuess = event => {
    this.setState({ guess: +event.target.value, guessing: true, });
  };

  checkWin = event => {
    event.preventDefault()
    this.setState(state => {
      const win = state.guess === state.randomValue;
      return {
        win,
        streak: win ? state.streak + 1 : 0,
        guessed: true,
        guessing: false,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The Guessing Game</h1>
        <form onSubmit={this.checkWin}>
          <input
            type="number"
            value={this.state.value}
            onChange={this.updateGuess}
            disabled={this.state.win}
            min="0" max="99" step="1" required
            className="number-input"
            placeholder="Enter a number."
            autoFocus
          />
          <input type="submit" value="Guess" disabled={this.state.guessed && !this.state.guessing} />
          <input type="reset" value="New number" onClick={this.reset} disabled={!this.state.guessed} />
        </form>
        {this.state.guessed && !this.state.guessing && (this.state.win ? <WinMessage /> : <LoseMessage />)}
        {this.state.streak>0 && <StreakMessage value={this.state.streak} />}
      </div>
    );
  }
}

export default App;
