import React from "react";
import "./App.css";

import Header from "./Components/Header";
import RandomButton from "./Components/RandomButton";
import PlaneteersContainer from "./Components/PlaneteersContainer";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
	state = {
		planetArray: [],
		filtered: [],
		searchValue: "",
	};

	searchHandler = (e) => {
		// console.log(e.target.value);
		// console.log(this.state.planetArray);
		// console.log(this.state.filtered);
		let newPlanetArray = this.state.planetArray.filter(
			(planeteer) =>
				planeteer.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase()) ||
				planeteer.bio
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
		);
		this.setState({
			searchValue: e.target.value,
			filtered: newPlanetArray,
		});
		console.log(newPlanetArray);
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
				<PlaneteersContainer
					planetArray={
						this.state.searchValue === ""
							? this.state.planetArray
							: this.state.filtered
					}
				/>
			</div>
		);
	}
}

export default App;
