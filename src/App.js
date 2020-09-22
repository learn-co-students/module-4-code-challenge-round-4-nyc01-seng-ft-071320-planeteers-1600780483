import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    searchValue:"",
    addition:""
  }

  changer=(e)=>{
    e.persist()
    this.setState({searchValue:e.target.value})
  }

  addRandom=(obj)=>{
    // console.log("getting a rando", obj)
    this.setState({addition:obj})
  }

  render(){
    // console.log("add this person", this.state.addition)
    return (
      <div>
        <Header />
        <SearchBar changer={this.changer} search={this.state.searchValue}/>
        <RandomButton add={this.addRandom}/>
        <PlaneteersContainer add={this.state.addition} search={this.state.searchValue}/>
      </div>
    );
  }

}

export default App;
