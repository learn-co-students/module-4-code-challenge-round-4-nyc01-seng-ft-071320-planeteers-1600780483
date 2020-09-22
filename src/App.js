import React from 'react';
import './App.css';
import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    searchInput: ""
  }


  changeHandler = (e) =>{
    e.persist()
    this.setState(()=>({ searchInput: e.target.value }))
  }


  render(){
    console.log(this.state.searchInput)
    return (
      <div>
        <Header />
        <SearchBar searchInput = {this.state.searchInput} changeHandler = {this.changeHandler}/>
        <RandomButton/>
        <PlaneteersContainer searchInput={this.state.searchInput} />
      </div>
    );
  }

}

export default App;
