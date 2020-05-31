import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Drakula',
          id: 'asc2'
        },
        {
          name : 'Zombie',
          id: 'asc3'
        }
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters : users}))
  }
  render(){
  return (
    <div className="App">
    <CardList name='Makar'>{
        this.state.monsters.map(monster => <h1>{monster.name}</h1>)
      }</CardList>
    </div>
  )
  };
}

export default App;
