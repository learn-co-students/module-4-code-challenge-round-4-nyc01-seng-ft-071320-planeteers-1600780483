import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state ={
    planeteerArray: [],
    search: ""
  }
  
  
  
  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => this.setState({planeteerArray: data}))
  }

  // searchHandler = (searchValue) => {
  //   this.setState({search: searchValue})
  //   this.filterPlaneteers()
  // }

  // buggy bc this.setState is async and its running filter planeteers b4 setState
  filterPlaneteers = () => {
    return this.state.planeteerArray.filter(ele => ele.name.toLowerCase().includes(this.state.search))
  }

  searchHandler = (searchValue) => {
    this.setState({
      search: searchValue
  }, () => {
      this.filterPlaneteers();
  });
  }
  
  
  
  render(){
    // console.log("state:", this.state)
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.filterPlaneteers()}/>
      </div>
    );
  }

}

export default App;
