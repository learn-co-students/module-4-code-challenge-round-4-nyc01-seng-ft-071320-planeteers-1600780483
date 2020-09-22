import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    searchTerm: '',
    containerArray: []
  }

  componentDidMount=() => {
    fetch('http://localhost:4000/planeteers')
      .then(resp=> resp.json())
      .then(data => {
        this.setState({containerArray: data})
        } 
      )
  }

  generateArray=()=>{
    console.log(this.state.containerArray)
    return this.state.containerArray
  }
  

  render(){
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer containerArray={this.generateArray()}/>
      </div>
    );
  }

}

export default App;
