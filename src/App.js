import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    searchValue: "",
    filteredArray: []
  }

  changeHandler = (e) => {
    console.log("inside changeHandler:", e.target.value)
    // this.setState({searchValue: e.target.value})
  }

  filter = () => {
    //need to pass in the planeteersArray from the container to filter
    // return this.state.
  }

  grabArray = (array) => {
    console.log("inside grabArray :", array)
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar changeHandler={this.changeHandler}/>
        <RandomButton/>
        <PlaneteersContainer grabArray={this.grabArray} filter={this.filter} />
      </div>
    );
  }

}

export default App;


