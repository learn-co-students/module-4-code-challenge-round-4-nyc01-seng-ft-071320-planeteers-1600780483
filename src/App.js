import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  //create the state for the planeteers Collection
  state = {
    planeteers: [],
    showBio: true,
    searchTerm: ""
  }

  //fetch the data
  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => (this.setState({planeteers: data})))
  }

  //create the clickHandler to render the quote instea of the bio
  clickHandler = (planeteer) => {
    console.log("clicked")
    // let display = this.state.showBio
    // display = !display
    // if (display === false) {
    //   let newArray = [...this.state.planeteers]
    //   let foundPlaneteer = newArray.find(el => el.id === planeteer.id)
    //   foundPlaneteer.bio = foundPlaneteer.quote
    //   this.setState({planeteers: newArray})
    // }
  }

  changeHandler = (e) => {
    console.log("changing")
    e.persist()

    //I need to change the value in state
    this.setState(() => ({
      searchTerm: e.target.value
    }))
  }

  render(){
    // console.log(this.state)
    return (
      <div>
        <Header />
        <SearchBar value={this.state.searchTerm} changeHandler={this.changeHandler}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} clickHandler={this.clickHandler}/>
      </div>
    );
  }

}

export default App;
