import React, { Component } from 'react'

import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase()) 
    )
    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    )
  }
}
