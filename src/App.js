import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
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

  filteredPlaneteers = () => {
    if (this.state.searchTerm) {
      return this.state.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm))
    }
    return this.state.planeteers
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} changeHandler={this.changeHandler}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filteredPlaneteers()}/>
      </div>
    );
  }

}

export default App;
