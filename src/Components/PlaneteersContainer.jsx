import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  console.log("all planeteers:", props.planeteers)

  let planeteer = props.planeteers.map(ele => <Planeteer key={ele.id} planeteer={ele}/>)

  return (
    <ul className="cards">
      {planeteer}
    </ul>
  )

};

export default PlaneteersContainer;
