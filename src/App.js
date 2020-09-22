import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers: [],
    searchValue: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/planeteers')
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
    return this.state.planeteers.filter(planeteer => {return planeteer.name.toLowerCase().includes(formattedSearch) || planeteer.bio.toLowerCase().includes(formattedSearch)})
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} value={this.state.searchValue} />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filterPlaneteers()} />
      </div>
    );
  }

}

export default App;
