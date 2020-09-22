import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteersArray: [],
    search: "",
    sortChecked: false
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
      .then(resp => resp.json())
      .then(planeteers => this.setState(() => ({ planeteersArray: planeteers })))
  }

  searchHandler = (term) => {
    this.setState(() => ({ search: term }))
  }

  todaysYear = () => {
    let d = new Date()
    return d.getFullYear()
  }

  sortPlaneteers = () => {
    let arrayToFilter = this.state.planeteersArray
    let year = this.todaysYear()
    console.log(this.state.sortChecked)
    return this.state.sortChecked ? arrayToFilter.sort(function (a, b) { return (year - a.born) - (year - b.born) }) : arrayToFilter.sort(function (a, b) { return a.id - b.id })
  }

  filterNames = () => {
    return this.sortPlaneteers().filter(p => (p.name.toLowerCase().includes(this.state.search.toLowerCase()) || p.bio.toLowerCase().includes(this.state.search.toLowerCase())))
  }

  postRandomPlaneteer = (pObj) => {

    const options = {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pObj)
    }

    fetch('http://localhost:4000/planeteers', options)
      .then(resp => resp.json())
      .then(planeteer => this.setState((previousState) => ({ planeteersArray: [...previousState.planeteersArray, planeteer] })))
  }

  handleCheck = (checkValue) => {
    this.setState(() => ({ sortChecked: checkValue }))
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} handleCheck={this.handleCheck} />
        <RandomButton postRandomPlaneteer={this.postRandomPlaneteer} />
        <PlaneteersContainer planeteers={this.filterNames()} />
      </div>
    );
  }

}

export default App;
