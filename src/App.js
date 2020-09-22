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

  updateSearchTerm=(e)=>{
    console.log('update heard by state')
    e.persist()
    this.setState(()=>({
      searchTerm: e.target.value}))
  }
  
  generateArray=()=>{
    console.log(this.state.containerArray)
    return this.state.containerArray.filter(planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
  componentDidMount=() => {
    fetch('http://localhost:4000/planeteers')
      .then(resp=> resp.json())
      .then(data => {
        this.setState({containerArray: data})
        } 
      )
  }

  

  render(){
    return (
      <div>
        <Header />
        <SearchBar value={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm}/>
        <RandomButton/>
        <PlaneteersContainer containerArray={this.generateArray()}/>
      </div>
    );
  }

}

export default App;
