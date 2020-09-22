import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = props => {

  const genPlaneteers = () => {
    return props.planeteers.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/>)
  }

  return (
    <ul className="cards">
      {genPlaneteers()}
    </ul>
  )

};

export default PlaneteersContainer;
