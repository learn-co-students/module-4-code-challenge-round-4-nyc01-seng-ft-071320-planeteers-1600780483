import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    array : [],
    search: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => {
      this.setState(() => ({ array: data}))
    })
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(({[e.target.name]: e.target.value}))
  }

  addPlaneteer = (obj) => {
    fetch("http://localhost:4000/planeteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        fromUSA: obj.fromUSA,
        born: obj.born,
        bio: obj.bio,
        quote: obj.quote,
        pictureUrl: obj.pictureUrl,
        twitter: obj.twitter
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState((previousState) => ({array: [...previousState.array, data]}))
    })
  }

  filteredResult = () => {
    return this.state.array.filter(el => el.name.toLowerCase().includes(this.state.search.toLowerCase()) || el.bio.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar value={this.state.search} changeHandler={this.changeHandler}/>
        <RandomButton clickHandler={this.addPlaneteer}/>
        <PlaneteersContainer data={this.filteredResult()}/>
      </div>
    );
  }

}

export default App;
