import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteerArray: [],
    planeteerId: []
  }

  clickHandler = (id) => {
    console.log('something', id)
  }

  render(){
    let planeteerIdArray = this.state.planeteerId.map( id => id.this.state.planeteerArray.find(planeteerArray => planeteerArray.id === id))
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={ this.state.planeteerArray } clickHandler={ this.clickHandler } />
      </div>
    );
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(resp => resp.json())
    .then(data => this.setState({
      planeteerArray: data
    }))
  }

}

export default App;
