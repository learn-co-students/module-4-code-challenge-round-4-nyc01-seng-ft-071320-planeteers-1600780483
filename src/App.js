import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers: [],
    searchValue: "",
    sorted: false
  }

  URL = 'http://localhost:4000/planeteers'

  componentDidMount = () => {
    fetch(this.URL)
    .then(resp => resp.json())
    .then(planeteers => {
      this.setState({planeteers: planeteers})
    })
  }

  searchHandler = (e) => {
    this.setState({searchValue: e.target.value})
  }

  filterPlaneteers = () => {
    let formattedSearch = this.state.searchValue.toLowerCase()
    let planeteers = this.state.planeteers.filter(planeteer => {return planeteer.name.toLowerCase().includes(formattedSearch) || planeteer.bio.toLowerCase().includes(formattedSearch)})
    if (this.state.sorted) {
      return planeteers.sort((a, b) => {
        return b.born - a.born
      })
    }
    return planeteers
  }

  addRandom = (planeteer) => {
    let newArray = [...this.state.planeteers, planeteer]
    console.log(planeteer)
    this.setState({planeteers: newArray})
    fetch(this.URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(planeteer)
    })
  }

  toggleSort = () => {
    this.setState(previousState => ({sorted: !previousState.sorted}))
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} value={this.state.searchValue} toggleSort={this.toggleSort} />
        <RandomButton addRandom={this.addRandom} />
        <PlaneteersContainer planeteers={this.filterPlaneteers()} />
      </div>
    );
  }

}

export default App;
