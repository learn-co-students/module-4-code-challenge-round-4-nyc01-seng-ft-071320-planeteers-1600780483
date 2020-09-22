import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    array : [],
    search: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => {
      this.setState(() => ({ array: data}))
    })
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(({[e.target.name]: e.target.value}))
  }

  filteredResult = () => {
    return this.state.array.filter(el => el.name.toLowerCase().includes(this.state.search.toLowerCase()) || el.bio.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render(){
    console.log(this.state.search)
    return (
      <div>
        <Header />
        <SearchBar value={this.state.search} changeHandler={this.changeHandler}/>
        <RandomButton/>
        <PlaneteersContainer data={this.filteredResult()}/>
      </div>
    );
  }

}

export default App;
