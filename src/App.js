import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { Searchbox } from './components/searchbox/search-box.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }


  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Searchbox
          placeholder="search monsters"
          onSearchChange={this.handleChange} />
        <CardList
          monsters={filteredMonsters}>
        </CardList>
      </div >
    )
  }

}

export default App;


/* <Searchbox
     placeholder="search monsters"
     handleChange={e =>  // you can put a curly bracket here if you want to return more than just 1 thing
     this.setState({ searchField: e.target.value }, () => console.log(this.state)) // second argument gets called after the async statechange is done
} /> */