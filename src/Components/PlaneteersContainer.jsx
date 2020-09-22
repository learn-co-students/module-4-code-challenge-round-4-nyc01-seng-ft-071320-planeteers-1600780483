import React from "react";
import Planeteer from "./Planeteer";

class PlaneteersContainer extends React.Component {
	planeteers = () =>
		this.props.planetArray.map((element) => (
			<Planeteer key={element.id} planeteer={element} />
		));

	render() {
		return <ul className="cards">{this.planeteers()}</ul>;
	}
}

export default PlaneteersContainer;
