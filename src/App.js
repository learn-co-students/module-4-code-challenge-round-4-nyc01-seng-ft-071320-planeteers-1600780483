import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Containers/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    filteredArray: false
  }

  componentDidMount(){
    fetch('http://localhost:3001/planeteers')
      .then(response => response.json())
      .then(planeteersArray => {
        this.setState(()=>({
          planeteers: planeteersArray
        }))
      })
  }

  filterPlaneteersByNameOrBio = (searchValue) => {
    let newArray = this.state.planeteers
    let filtered = newArray.filter(planeteer => planeteer.name.toLowerCase().includes(searchValue.toLowerCase()) || planeteer.bio.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState(()=>({
      filteredArray: filtered
    }))
  }

  render(){

    console.log(this.state.planeteers)

    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.filterPlaneteersByNameOrBio} />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.filteredArray ? this.state.filteredArray : this.state.planeteers} />
      </div>
    );
  }

}

export default App;


/*
1. render list of planateers
2. make location conditional for each planateer
3. make image clickeable
      1. toggle quote and bio
4. fuzzy search bar
      give filteredArray to components to render
*/

/* Stretches

*/