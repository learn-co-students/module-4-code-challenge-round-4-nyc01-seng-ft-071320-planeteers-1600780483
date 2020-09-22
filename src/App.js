import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Containers/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const BASE_URL = "http://localhost:4000/planeteers/"

class App extends React.Component {

  componentDidMount(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => {this.setState(
      {planeteers: data, filteredPlaneteers: data}
      )
    })
  }

  state = {
    planeteers: [],
    filteredPlaneteers: [],
    filter: ""
  }

  searchHandler = (keywords) => {
    let filtered = this.state.planeteers.filter(planeteer => planeteer.bio.includes(keywords))
    this.setState({
      filteredPlaneteers: filtered
    })
    if(keywords.length === 0){
      this.setState({
        filteredPlaneteers: this.state.planeteers
      })
    }
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.filteredPlaneteers}/>
      </div>
    );
  }

}

export default App;
