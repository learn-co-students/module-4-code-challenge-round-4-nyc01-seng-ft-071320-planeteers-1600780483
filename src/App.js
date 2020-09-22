import React from 'react';
import './App.css';
import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'
import Planeteer from "./Components/Planeteer"

class App extends React.Component {

  state = {
    plantArray: [],
    searchTerm: "",
    // filtered: ""
  }

  searchHandler = (term) => {
    this.setState(() => ({
      searchTerm: term
    }))
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
      .then(resp=>resp.json())
      .then(data=>this.setState(()=>({ plantArray: data })))
  }

  // filteredArray=()=>{
  //   // debugger
  //   let filtered = this.state.plantArray.filter(el => el.bio.includes(this.state.searchTerm))
  //   return filtered.map(ele => <Planeteer key={ele.id} planeteer={ele} />)
  // }

  render(){
    console.log(this.state.searchTerm)
    return (
      <div>
        <Header />
        <SearchBar term={this.state.searchTerm} searchHandler={this.searchHandler} />
        <RandomButton/>
        <PlaneteersContainer planeteer={this.state.plantArray} />
        {/* <PlaneteersContainer planeteer={this.filteredArray()} /> */}
      </div>
    );
  }

}

export default App;
