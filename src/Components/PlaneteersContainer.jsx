import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  planeteers = () => {
    return this.props.planeteers.map(planeteer => <Planeteer planeteer={planeteer} />)
  }

  render() {    
    return (
      <ul className="cards">
        {
          this.planeteers()
        }
      </ul>
  )}
};

export default PlaneteersContainer;
