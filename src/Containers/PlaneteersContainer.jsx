import React from 'react';
import Planeteer from '../Components/Planeteer'

const PlaneteersContainer = (props) => {

  
  return (
    <ul className="cards">
      {
        props.planeteers.map(planeteer => {return <Planeteer planeteer={planeteer} />})
      }
    </ul>
  )

};

export default PlaneteersContainer;
