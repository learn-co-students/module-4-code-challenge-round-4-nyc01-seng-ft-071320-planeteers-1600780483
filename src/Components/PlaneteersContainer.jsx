import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

   let planRender = () => {
    return props.planeteers.map(kid => <Planeteer born = {kid.born} key={kid.id} name={kid.name} fromUSA = {kid.fromUSA} born={kid.born} bio={kid.bio} quote={kid.quote} pictureUrl={kid.pictureUrl} twitter={kid.twitter}/>)
  }

  return (
    <ul className="cards">
      {
        planRender()
      }
    </ul>
  )

};

export default PlaneteersContainer;
