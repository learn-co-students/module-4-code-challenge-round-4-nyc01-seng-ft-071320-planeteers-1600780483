import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    peopleArray: [],
    search: "", 
    checked: false
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(resp=>resp.json())
    .then(data => {
      this.setState(()=>({
        peopleArray: data
      }))
    })
  }

  searchHandler = (e) => {
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }
  
  searchFilter = () => {
    return this.state.peopleArray.filter(person => person.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()) || person.bio.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()))
  }
  sort = () => {
    if (this.state.checked){
      return this.searchFilter().sort((a, b) => b.born - a.born)
    } else {
      return this.searchFilter().sort((a, b) => a.id - b.id)
    }  
  }
  
  newPerson = (newPersonObj) => {
    const configObj = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'},
      body: JSON.stringify(newPersonObj)
    }
    fetch('http://localhost:4000/planeteers', configObj)
    .then(resp=>resp.json())
    .then(returnedPerson => {
      this.setState(()=>({
        peopleArray: [...this.state.peopleArray, returnedPerson]
      }))
    })
  }

  removePerson = (personObj) => {
    const configObj = {
      method: 'Delete', 
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'}
    }
    fetch(`http://localhost:4000/planeteers/${personObj.id}`, configObj)
    .then(resp=>resp.json())
    .then(data => {
      const newArray = this.state.peopleArray.filter(person => person.id !== personObj.id)   
      if (!data.id){
        this.setState(()=>({
          peopleArray: newArray
        }))
      }
    })
  }

  sortHandler = () => {
    this.setState(()=>({
      checked: !this.state.checked
    }))
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar checked={this.state.checked} sort={this.sortHandler} searchHandler={this.searchHandler} searchValue={this.state.search} />
        <RandomButton newPerson={this.newPerson} />
        <PlaneteersContainer remove={this.removePerson} people={this.sort()}/>
      </div>
    );
  }

}

export default App;
