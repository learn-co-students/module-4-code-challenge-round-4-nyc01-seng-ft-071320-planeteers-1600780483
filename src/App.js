import React from "react";
import "./App.css";

import Header from "./Components/Header";
import RandomButton from "./Components/RandomButton";
import PlaneteersContainer from "./Components/PlaneteersContainer";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
  state = {
    planeteerArray: [],
    filtered: {},
    searchValue: "",
  };
  componentDidMount() {
    fetch("http://localhost:3006/planeteers")
      .then((res) => res.json())
      .then((data) => this.setState({ planeteerArray: data }));
  }
  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
    // console.log("SEARCH VALUE:", searchValue);
  };

  render() {
    const pArray =
      this.state.searchValue === ""
        ? this.state.planeteerArray
        : this.state.planeteerArray.filter(
            (p) =>
              p.name
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase()) ||
              p.bio.toLowerCase().includes(this.state.searchValue.toLowerCase())
          );
    // console.log(pArray);
    return (
      <div>
        <Header />
        <SearchBar value={this.state.value} search={this.search} />
        <RandomButton />
        <PlaneteersContainer pArray={pArray} />
      </div>
    );
  }
}

export default App;
