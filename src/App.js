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

  changeHandler = (event) => {
    event.persist()
    this.setState(() => ({
      [event.target.name]: event.target.value
    }))
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
    .then(res => res.json())
    .then(data => {
      this.setState(()=>({planeteers: data}))
    })
  }

  filterData = (data) => {
    if (this.state.search === '') {
      return data
    } else {
      return data.filter(el => el.name.toLowerCase().includes(this.state.search.toLowerCase()) || el.bio.toLowerCase().includes(this.state.search.toLowerCase()))
    }
  }

  clickHandler = ( {name, fromUSA, born, bio, quote, pictureUrl, twitter} ) => {
    let options = {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        'accept':'application/json'
      },
      body: JSON.stringify({
        name: name,
        fromUSA: fromUSA,
        born: born,
        bio: bio,
        quote: quote,
        pictureUrl: pictureUrl,
        twitter: twitter
      })
    }
    fetch('http://localhost:4000/planeteers', options)
    .then(res => res.json())
    .then(newPlaneteer => {
      this.setState(()=>({
        planeteers: [...this.state.planeteers, newPlaneteer]
      }))
    })
  }

  render(){
    const {planeteers, search} = this.state
    return (
      <div>
        <Header />
        <SearchBar search={search} changeHandler={this.changeHandler}/>
        <RandomButton parentClickHandler={this.clickHandler}/>
        <PlaneteersContainer planeteers={this.filterData(planeteers)}/>
      </div>
    );
  }

}

export default App;
