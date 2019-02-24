import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  //State only available in classes that extend Component!
  state = {
    people: [
      { name: 'Sam', age: 24 },
      { name: 'Drake', age: 69 },
      { name: 'Frank', age: 42 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        { name: 'Sammy', age: 24 },
        { name: 'Drake', age: 1069 },
        { name: 'Frank', age: 420 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>SW</h1>
        <p>______</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}>My Hobbies: Getting Lit</Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} />
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
  }
}

export default App;
