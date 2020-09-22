import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  function renderPlaneteers () {
    return props.planeteers.map(planeteer => {
      return <Planeteer key={planeteer.id} planeteer={planeteer}/>
    })
  }

  return (
    <ul className="cards">
      {
        renderPlaneteers()
      }
    </ul>
  )

};

export default PlaneteersContainer;
