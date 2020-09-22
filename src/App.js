import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    searchValue:"",
  }

  changer=(e)=>{
    e.persist()
    this.setState({searchValue:e.target.value})
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar changer={this.changer} search={this.state.searchValue}/>
        <RandomButton/>
        <PlaneteersContainer search={this.state.searchValue}/>
      </div>
    );
  }

}

export default App;
