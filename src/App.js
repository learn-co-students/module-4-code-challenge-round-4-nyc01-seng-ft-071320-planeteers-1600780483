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

  // buggy bc this.setState is async and its running filter planeteers b4 setState, do something w/ filtered array
  filterPlaneteers = () => {
    return this.state.planeteerArray.filter(ele => ele.name.toLowerCase().includes(this.state.search))
  }

  // it sets state w/ the search value but then re renders. when it rerenders, it renders w/ filterPlaneteers which is still
  // empty bc it hasnt been called yet
  searchHandler = (searchValue) => {
    this.setState({search: searchValue}, 
      () => {this.filterPlaneteers();}
  );
  }
  
  render(){
    console.log("state in render:", this.state.planeteerArray)
    console.log("search in app", this.state.search)
    // this.filterPlaneteers();
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
