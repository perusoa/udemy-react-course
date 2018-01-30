import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      persons: [
        { name: 'Anthony', age: 24 },
        { name: 'Johnny', age: 29 },
        { name: 'Carly', age: 26 },
      ],
      otherState: 'NXT Sports'
    };
    
  }

  switchNameHandler = (newName) => {
    //console.log('This was clicked!');
    //Always use the setState built in method
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Bernadette', age: 47 },
        { name: 'Reggie', age: 33 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Anthony', age: 29 },
        { name: event.target.value, age: 47 },
        { name: 'Reggie', age: 33 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working now!</p>
        <button onClick={() => this.switchNameHandler('Brett')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this, 'Max!')} name={this.state.persons[1].name} age={this.state.persons[1].age}>Happy New Year!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
