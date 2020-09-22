import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    peopleArray: [],
    search: ""
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



  render(){
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} searchValue={this.state.search} />
        <RandomButton/>
        <PlaneteersContainer people={this.searchFilter()}/>
      </div>
    );
  }

}

export default App;
