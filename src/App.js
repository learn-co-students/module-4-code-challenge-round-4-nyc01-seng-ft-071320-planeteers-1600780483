import React from "react";
import "./App.css";

import Header from "./Components/Header";
import RandomButton from "./Components/RandomButton";
import PlaneteersContainer from "./Components/PlaneteersContainer";
import SearchBar from "./Components/SearchBar";

const API = "http://localhost:4000/planeteers/";

class App extends React.Component {
  state = {
    planeteers: [],
    searchWords: "",
    renderInfo: true,
    person: [],
  };

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState(() => ({
          planeteers: data,
        }));
      });
  }

  clickHandler = (e) => {
    console.log("clicked", e);
    this.setState((prevInfo) => ({
      renderInfo: !prevInfo,
      person: e,
    }));
  };

  renderHandler = () => {
    if (this.state.renderInfo === false) {
      return this.state.person.quote;
    } else {
      return this.state.person.bio;
    }
  };

  changeHandler = (e) => {
    e.persist();
    this.setState(() => ({
      searchWords: e.target.value,
    }));
  };

  filterPlaneteers = () => {
    let newArray = [...this.state.planeteers];
    if (this.state.searchWords !== "") {
      return newArray.filter((el) => {
        return (
          el.name
            .toLowerCase()
            .includes(this.state.searchWords.toLowerCase()) ||
          el.bio.toLowerCase().includes(this.state.searchWords.toLowerCase())
        );
      });
    }
    return newArray;
  };

  render() {
    const filteredPlaneteers = this.filterPlaneteers();
    return (
      <div>
        <Header />
        <SearchBar
          searchWords={this.state.searchWords}
          changeHandler={this.changeHandler}
        />
        <RandomButton />
        <PlaneteersContainer
          planeteers={filteredPlaneteers}
          clickHandler={this.clickHandler}
          renderHandler={this.renderHandler}
        />
      </div>
    );
  }
}

export default App;
