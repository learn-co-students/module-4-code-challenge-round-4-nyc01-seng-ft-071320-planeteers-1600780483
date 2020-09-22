import React from 'react';
import './App.css';
import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: "",
    sortChecked: false
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(res => res.json())
    .then(planeteers => {
      this.setState({planeteers: planeteers})
    })
  }

  changeHandler = e => {
    this.setState({searchTerm: e.target.value.toLowerCase()})
  }

  sortHandler = () => {
    this.setState({sortChecked: !this.state.sortChecked})
  }

  filteredPlaneteers = () => {
    if (this.state.searchTerm) {
      return this.state.planeteers.filter(planeteer => {
        if (planeteer.name.toLowerCase().includes(this.state.searchTerm) || planeteer.bio.toLowerCase().includes(this.state.searchTerm)) {
          return true
        } else {
          return false
        }
      })
    }
    return this.state.planeteers
  }

  sortedPlaneteers = () => {
    if (this.state.sortChecked) {
      return this.filteredPlaneteers().sort((a, b) => b.born - a.born)
    }
    return this.filteredPlaneteers().sort((a, b) => a.id - b.id)
  }

  addRandomPlaneteer = planeteerObj => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(planeteerObj)
    }
    fetch("http://localhost:4000/planeteers", options)
    .then(res => res.json())
    .then(planeteer => {
      const newPlaneteers = [...this.state.planeteers, planeteer]
      this.setState({planeteers: newPlaneteers})
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} sortChecked={this.state.sortChecked} changeHandler={this.changeHandler} sortHandler={this.sortHandler}/>
        <RandomButton clickHandler={this.addRandomPlaneteer}/>
        <PlaneteersContainer planeteers={this.sortedPlaneteers()}/>
      </div>
    );
  }
}

export default App;
