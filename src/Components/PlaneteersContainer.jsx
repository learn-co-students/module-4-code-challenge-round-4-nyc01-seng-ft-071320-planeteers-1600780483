import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = ( {planeteers} ) => {

  return (
    <ul className="cards">
      {
        planeteers.map(el => <Planeteer key={el.id} planeteer={el}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
