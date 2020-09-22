import React from 'react';
import './App.css';
import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteersArr: [],
    term: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/planeteers")
    .then(res => res.json())
    .then(data => {
      this.setState({
        planeteersArr: data
      })
    })
  }

  searchHandler = (message) => {
    // console.log(message)
    this.setState({
      term: message
    })
  }

  render(){
    console.log(this.state.term)
    return (
      <div>
        <Header />
        <SearchBar searchHandler={this.searchHandler} />
        <RandomButton/>
        <PlaneteersContainer searchTerm={this.state.term} planeteers={this.state.planeteersArr} />
      </div>
    );
  }

}

export default App;
