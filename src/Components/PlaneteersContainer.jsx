import React from "react";
import Planeteer from "./Planeteer";

class PlaneteersContainer extends React.Component {
  renderPlaneteers = () => {
    return this.props.planeteers.map((person) => {
      return (
        <Planeteer
          key={person.id}
          planeteer={person}
          clickHandler={this.props.clickHandler}
          renderHandler={this.props.renderHandler}
        />
      );
    });
  };

  render() {
    return <ul className="cards">{this.renderPlaneteers()}</ul>;
  }
}

export default PlaneteersContainer;
