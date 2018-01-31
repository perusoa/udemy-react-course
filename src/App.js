import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      persons: [
        { id: 'asdjkasgdkj', name: 'Anthony', age: 24 },
        { id: 'asdjkasdasd', name: 'Johnny', age: 29 },
        { id: 'asdjasfasdj', name: 'Carly', age: 26 },
      ],
      otherState: 'NXT Sports',
      showPersons: false
    };
    
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    //Find the index of the person whose ID matches the given text field
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //Store that person into a temporary const to manipulate
    const person = {
      ...this.state.persons[personIndex]
    };

    //Chnage the name of the person to be whatever is currently in the text field
    person.name = event.target.value;

    //Grab the whole persons state array from beginning
    const persons = [...this.state.persons];
    //Swap the old person's index with the new updated one
    persons[personIndex] = person;

    //Update the state with the new persons array
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    //Way to enter content conditionally
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map((person, index) => {
              return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)} />;
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
          backgroundColor: 'green',
          color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working now!</p>
          <button onClick={this.togglePersonsHandler} style={ style }>Switch Name</button>
          { persons }
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default Radium(App);
