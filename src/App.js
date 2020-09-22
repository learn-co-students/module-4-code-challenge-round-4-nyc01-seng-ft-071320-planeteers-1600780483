import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const baseUrl = "http://localhost:4000/planeteers/"

class App extends React.Component {

  state = {
    planeteers: [],
    searchVal: ""
  }
  
  
  
  componentDidMount = () => {
    fetch(baseUrl)
      .then(resp => resp.json())
      .then(data => 
        this.setState({ planeteers: data}))
  }

  changeHandler = (e) => {
    this.setState({ searchVal: e })
  }

  filteredPlaneteers = () => {
    return this.state.planeteers.filter(el => (el.name.toLowerCase() && el.bio.toLowerCase()).includes(this.state.searchVal.toLowerCase()) )
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchVal={this.state.searchVal} changeHandler={this.changeHandler} />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filteredPlaneteers()} />
      </div>
    );
  }

}

export default App;
