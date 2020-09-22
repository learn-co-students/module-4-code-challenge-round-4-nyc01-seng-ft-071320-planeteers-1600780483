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
      console.log(planeteer.name)
      console.log(planeteer.bio)
      return planeteer.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) || planeteer.bio.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
 
  }

  randomHandler = (planeteerObj) => {
    console.log(planeteerObj)
    fetch('http://localhost:4000/planeteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(planeteerObj)
    }).then(response => response.json())
    .then(newObj => {
      if(newObj.id !== undefined) {
        let newArray = [newObj, ...this.state.planeteers]
        this.setState({
          planeteers: newArray
        })
      }
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar changeHandler={this.changeHandler} searchValue={this.state.searchValue}/>
        <RandomButton randomHandler={this.randomHandler}/>
        <PlaneteersContainer planeteers={this.filterPlaneteers()} />
      </div>
    );
  }

}

export default App;
