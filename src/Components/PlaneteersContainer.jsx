import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  renderPlaneteer = () =>{
    return this.props.planeteers.map(planeteers => <Planeteer key={planeteers.id} planeteer={planeteers} />)
  }

  render() {
    return (
      <ul className="cards">
        {this.renderPlaneteer()}
      </ul>
    )
  }

};

export default PlaneteersContainer;
