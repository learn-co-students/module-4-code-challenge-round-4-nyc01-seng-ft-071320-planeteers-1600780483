import React from 'react';
import Planeteer from './Planeteer'

const renderPlaneteers = (props) => {
  return props.planeteers.map(p => <Planeteer key={p.id} p={p} />)
}

const PlaneteersContainer = (props) => {


  return (
    <ul className="cards">
      {
        renderPlaneteers(props)
      }
    </ul>
  )

};

export default PlaneteersContainer;
