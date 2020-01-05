import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {
  state = {
    username: "Kartik"
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value }
    )
  }

  render() {
    const style = {
      width: '60%',
      margin: '16px',
      border: '10px solid #eee',
      padding: '16px',
      font: 'consolas',
      color: "red"
  };
    return (
      <div className="App">
        <div>
          <div style={style}>
          <UserInput username={this.state.username} change={this.nameChangeHandler}/>
          </div>
          
          <UserOutput username="astik"/>
          <UserOutput username={this.state.username}/>
        </div>
      </div>
    );
  }
}

export default App;
