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
    //! backend opened up on 3000 and frontend opened on 3001
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

  renderNew = (data) => {
    console.log(data)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    }
    fetch("http://localhost:3000/planeteers", options)
    .then(res => res.json())
    .then(planeteer => {
      let newArray = [...this.state.planeteersArr, planeteer]
      this.setState({
      planeteersArr: newArray.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
      })
    })
  }

  // checkHandler = (value) => {
  //   // console.log(value)
  //   if(value){
  //     console.log(true)
  //   } else {

  //   }
  // }
    
  render(){
    console.log(this.state.term)
    return (
      <div>
        <Header />
        <SearchBar checkHandler={this.checkHandler} searchHandler={this.searchHandler} />
        <RandomButton post={this.renderNew} />
        <PlaneteersContainer searchTerm={this.state.term} planeteers={this.state.planeteersArr} />
      </div>
    );
  }

}

export default App;
