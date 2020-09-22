import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteersArray: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
      .then(resp => resp.json())
      .then(planeteers => this.setState(() => ({ planeteersArray: planeteers })))
  }

  searchHandler = (term) => {
    this.setState(() => ({ search: term }))
  }

  filterNames = () => {
    return this.state.planeteersArray.filter(p => (p.name.toLowerCase().includes(this.state.search.toLowerCase()) || p.bio.toLowerCase().includes(this.state.search.toLowerCase())))
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} />
        <RandomButton />
        <PlaneteersContainer planeteers={this.filterNames()} />
      </div>
    );
  }

}

export default App;
