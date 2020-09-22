import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteerArr: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(resp => resp.json())
    .then(data => this.setState({
      planeteerArr: data
    }))
  }

  searchHandler = (searchWord) => {
    // console.log(searchWord) // searchWord does not come up here with anything
    // i wanted to bring the "search word" up from the search component,
    // filter throught the given array to re-render by re setting state of the array being mapped through in the container
    // let foundObjs = this.state.planeteerArr.filter(el => el === searchWord)
    // this.setState({
    //   planeteerArr: [foundObjs, ...this.state.planeteerArr]
    // })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar search={this.searchHandler}/>
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteerArr}/>
      </div>
    );
  }

}

export default App;
