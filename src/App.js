import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: "",
    checked: false
  }



  searchHandler = (searchTerm) => {
    this.setState({ searchTerm: searchTerm})
  }

  filterHandler = () =>{
    let newArray = this.state.planeteers
    let search = this.state.searchTerm    
    let filtered = newArray.filter(kid => kid.name.toLowerCase().includes(search.toLowerCase()))
    // return filtered
    if (this.state.checked===true){
      let sort = filtered
      sort = filtered.sort((a, b) => (a.born > b.born) ? 1 : -1)
      console.log(sort)
      return sort
    }else{return filtered}
    
  }

  ageSort = (check) => {
    console.log(check)
    this.setState({checked: check})
  }

  createKid = (kidObj) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(kidObj)
    }

    fetch("http://localhost:4000/planeteers/", options)
    .then(res => res.json())
    .then(kid => this.setState({planeteers: [...this.state.planeteers, kid]}))
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers/")
    .then(res => res.json())
    .then(data => this.setState({planeteers: data}))
  }

  render(){
    this.filterHandler()
    return (
      <div>
        <Header />
        <SearchBar ageSort = {this.ageSort} searchHandler = {this.searchHandler}/>
        <RandomButton createKid = {this.createKid}/>
        <PlaneteersContainer planeteers = {this.filterHandler()}/>
      </div>
    );
  }

}

export default App;
