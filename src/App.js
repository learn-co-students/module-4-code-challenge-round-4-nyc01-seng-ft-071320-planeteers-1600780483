import React from 'react';
import './App.css';

import Header from './Components/Header'
import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    search: '',
    filter: false
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

  searchData = (data) => {
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

  checkFilterStatus = (event) => {
    event.persist()
    if (event.target.checked) {
      this.setState(()=>({
        filter: true
      }))  
    } else {
      this.setState(()=>({
        filter: false
      }))
    }
  }

  compareAge = (a, b) => {
    const ageA = a.born
    const ageB = b.born
  
    let comparison = 0;
    if (ageA > ageB) {
      comparison = -1;
    } else if (ageA < ageB) {
      comparison = 1;
    }
    return comparison;
  }

  compareId = (a, b) => {
    const idA = a.id
    const idB = b.id
  
    let comparison = 0;
    if (idA > idB) {
      comparison = 1;
    } else if (idA < idB) {
      comparison = -1;
    }
    return comparison;
  }

  filter = (data) => {
    if (this.state.filter) {
      return data.sort(this.compareAge)
    } else {
      return data.sort(this.compareId)
    }
  }

  render(){
    console.log(this.state)
    const {planeteers, search} = this.state
    return (
      <div>
        <Header />
        <SearchBar checked={this.checkFilterStatus} search={search} changeHandler={this.changeHandler}/>
        <RandomButton parentClickHandler={this.clickHandler}/>
        <PlaneteersContainer planeteers={this.filter(this.searchData(planeteers))}/>
      </div>
    );
  }

}

export default App;
