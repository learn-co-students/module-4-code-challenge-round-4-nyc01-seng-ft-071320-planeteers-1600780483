import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    search: "",
    name: "",
    fromUSA: true,
    born: 2000,
    bio: "",
    quote: "",
    pictureUrl: "",
    twitter: ""
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
    .then(res => res.json())
    .then(data => {
      this.setState({planeteers: data})
    })
  }

  changeHandler = (event) => {
    event.persist()
    this.setState(() =>({
      [event.target.name]: event.target.value
    })
    )
  }

  filterSearch = (input) => {
    if(this.state.search === '') {
      return input
    } else {
      return input.filter(ele => ele.name.startsWith(this.state.search.toUpperCase()))
    }
  }

  newPlaneteer=(event) => {
    const {planeteers, name, fromUSA, born, quote, bio, pictureUrl, twitter} = this.state

    let options = {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify({
        name: event.name,
        fromUSA: event.fromUSA,
        born: event.born,
        quote: event.quote,
        bio: event.bio,
        pictureUrl: event.pictureUrl,
        twitter: event.twitter
      })
    }
    fetch(`http://localhost:4000/planeteers`, options)
    .then(res => res.json())
    .then(data => this.setState({
      planeteers: [data, ...planeteers]
    }))
  }
//   newPlaneteer =( {name, fromUSA, born, quote, bio, pictureUrl, twitter} ) => {
//     let options = {
//       method: 'POST',
//       headers: {
//         'content-type':'application/json',
//         'accept':'application/json'
//       },
//       body: JSON.stringify({
//         name: name,
//         fromUSA: fromUSA,
//         born: born,
//         quote: quote,
//         bio: bio,
//         pictureUrl: pictureUrl,
//         twitter: twitter
//       })
//     }
//     fetch(`http://localhost:4000/planeteers`, options)
//     .then(res => res.json())
//     .then(data => {
//       this.setState(() =>({
//         planeteers: [...this.state.planeteers, data]
//       }))
//     })
//   }

//   render(){
//     const {planeteers, search} = this.state
//     return (
//       <div>
//         <Header />
//         <SearchBar search={search} changeHandler={this.changeHandler}/>
//         <RandomButton newPlaneteer={this.newPlaneteer}/>
//         <PlaneteersContainer planeteers={this.filterSearch(planeteers)}/>
//       </div>
//     );
//   }


  render(){
    const {planeteers, search} = this.state
    return (
      <div>
        <Header />
        <SearchBar search={search} changeHandler={this.changeHandler}/>
        <RandomButton newPlaneteer={this.newPlaneteer}/>
        <PlaneteersContainer planeteers={this.filterSearch(planeteers)}/>
      </div>
    );
  }

}

export default App;
