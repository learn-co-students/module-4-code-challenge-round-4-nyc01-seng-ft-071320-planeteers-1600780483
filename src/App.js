import React from 'react';
import './App.css';

import Header from './Components/Header';
import RandomButton from './Components/RandomButton';
import PlaneteersContainer from './Components/PlaneteersContainer';
import SearchBar from './Components/SearchBar';

const baseUrl = 'http://localhost:4000/planeteers/';
class App extends React.Component {
  state = {
    planeteers: [],
    searchValue: '',
  };

  searchHandler = (e) => {
    e.persist();
    this.setState(() => ({
      searchValue: e.target.value,
    }));
    console.log(this.state.searchValue);
  };

  filteredPlaneteers = () => {
    let filteredArr = [...this.state.planeteers];
    return filteredArr.filter(
      (planet) =>
        planet.name
          .toLowerCase()
          .includes(this.state.searchValue.toLowerCase()) ||
        planet.bio.toLowerCase().includes(this.state.searchValue.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          search={this.searchHandler}
          searchValue={this.state.searchValue}
        />
        <RandomButton />
        <PlaneteersContainer planeteers={this.filteredPlaneteers()} />
      </div>
    );
  }

  componentDidMount() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => ({
          planeteers: data,
        }));
      });
  }
}

export default App;
