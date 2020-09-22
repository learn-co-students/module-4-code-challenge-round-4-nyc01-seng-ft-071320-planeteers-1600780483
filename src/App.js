import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(res => res.json())
    .then(planeteers => {
      this.setState({planeteers: planeteers})
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers}/>
      </div>
    );
  }

}

export default App;
