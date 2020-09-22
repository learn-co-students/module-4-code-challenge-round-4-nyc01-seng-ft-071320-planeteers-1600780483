import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  const renderPlaneteers = () => {
    return props.planeteers.map(el => <Planeteer key={el.id} planeteer={el} />)
  }

  return (
    <ul className="cards">
      {renderPlaneteers()}
    </ul>
  )

};

export default PlaneteersContainer;
