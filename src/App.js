import React from "react";
import "./App.css";

import Header from "./Components/Header";
import RandomButton from "./Components/RandomButton";
import PlaneteersContainer from "./Components/PlaneteersContainer";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
	state = {
		planetArray: [],
		searchValue: "",
	};

	searchHandler = (e) => {
		let newPlanetArray = this.state.planetArray.filter((element) =>
			element.name.toLowerCase().includes(
				e.target.this.setState({
					planetArray: newPlanetArray,
					searchValue: e.target.value,
				})
			)
		);
	};

	componentDidMount() {
		fetch("http://localhost:4000/planeteers")
			.then((response) => response.json())
			.then((data) => this.setState({ planetArray: data }));
	}

	render() {
		return (
			<div>
				<Header />
				<SearchBar
					searchValue={this.state.searchValue}
					searchHandler={this.searchHandler}
				/>
				<RandomButton />
				<PlaneteersContainer planetArray={this.state.planetArray} />
			</div>
		);
	}
}

export default App;
