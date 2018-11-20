import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from "./components/Textbox";
import Button from "./components/Button";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbClicked: 0
        };
    }

    handleClick = () => {
        let newState = this.state.nbClicked;
        newState++;
        this.setState({nbClicked: newState});
    }
    redoClick = () => {
        let newState = this.state.nbClicked;
        newState--;
        this.setState({nbClicked: newState})
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

            <TextBox nbClicked={(this.state.nbClicked)}/>
            <Button handleClick={this.handleClick} text={"Plus"}/>
            <Button handleClick={this.redoClick} text="Moins"/>

        </header>
      </div>
    );
  }
}

export default App;
