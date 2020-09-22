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

  componentDidMount(){
  fetch("http://localhost:4000/planeteers")
  .then(resp => resp.json())
  .then(planeteersData=> this.setState({
    planeteers:planeteersData
  }))
  }

  filterSearch = () => {
    const planeteerCopy = [...this.state.planeteers]
    const searchT = this.state.searchTerm
    console.log(planeteerCopy)

    return planeteerCopy.filter(planeT => planeT.name.includes(searchT))
  }

  setSearchTerm = (term) => {
    this.setState({
      searchTerm:term
    })
    this.filterSearch()
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.setSearchTerm}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers} />
        {/* this container will pass this.filterSearch */}
      </div>
    );
  }

}

export default App;


//almost finished filter but ran out of time. would have added filter functionality to array adn passed to planeteersContainer