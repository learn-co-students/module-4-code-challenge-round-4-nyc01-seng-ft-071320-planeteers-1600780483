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
    sorted: true,
  };

  searchHandler = (e) => {
    e.persist();
    this.setState(() => ({
      searchValue: e.target.value,
    }));
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

  sortPlaneteers = (e) => {
    e.persist();
    let sortArray = [...this.state.planeteers];
    let today = new Date();
    let year = today.getFullYear();

    switch (this.state.sorted) {
      case true:
        sortArray.sort((a, b) => (year - a.born > year - b.born ? 1 : -1));
        this.setState(() => ({
          planeteers: sortArray,
          sorted: false,
        }));
        break;
      default:
        this.setState(() => ({
          planeteers: sortArray,
          sorted: true,
        }));
        break;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          search={this.searchHandler}
          searchValue={this.state.searchValue}
          sort={this.sortPlaneteers}
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
