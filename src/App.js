import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchValue: ''
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
    .then(response => response.json())
    .then(data => {
      this.setState({
        planeteers: data
      })
    })
  }

  changeHandler = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  filterPlaneteers = () => {
    return this.state.planeteers.filter(planeteer => {
      return planeteer.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) || planeteer.bio.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
 
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar changeHandler={this.changeHandler} searchValue={this.state.searchValue}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filterPlaneteers()} />
      </div>
    );
  }

}

export default App;
