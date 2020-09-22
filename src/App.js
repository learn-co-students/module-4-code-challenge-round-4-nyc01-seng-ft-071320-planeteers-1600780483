import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    search: ''
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(res => res.json())
    .then(data => this.setState({planeteers: data}))
  }

  planeteers(){
    console.log("In App, planeteers: ")
  }

  searchHandler = (searchTerm) => {
    this.setState(() => ({ search: searchTerm }))
  }

  renderSearch = () => {
    let remaining =  this.state.planeteers.filter(el => el.name.toLowerCase().includes(this.state.search))
    console.log("Checking each render: ", remaining) //It's still searching for 1 character before due to async
    return remaining
  }

  random = (obj) => {
    console.log("In App, random function: ", obj)
    let newArr = [obj, ...this.state.planeteers]
    this.setState({ planeteers: newArr })
  }

  sort = (byAge) => {
    if(!byAge){
      let newArr = [...this.state.planeteers]
      newArr.sort((a, b) => {
        return b.born - a.born;
      });
      this.setState({ planeteers: newArr })
    } else {
      let newArr = [...this.state.planeteers]
      newArr.sort((a, b) => {
        return a.id - b.id;
      });
      this.setState({ planeteers: newArr })
    }
  }

  render(){
    console.log("In the App: ", this.state.planeteers)
    console.log("Why are we sometimes not getting everyone back? ", this.renderSearch())
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} sort={this.sort}/>
        <RandomButton random={this.random}/>
        <PlaneteersContainer planeteers={this.renderSearch()}/>
      </div>
    );
  }

}

export default App;
