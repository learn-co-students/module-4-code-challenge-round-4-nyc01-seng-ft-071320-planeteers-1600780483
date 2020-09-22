import React from 'react';
import Planeteer from '../Components/Planeteer'

const PlaneteersContainer = (props) => {

  const renderPlaneteers = () => {
    let array = props.planeteers
    return array.map(planeteer => <Planeteer key={planeteer.id} id={planeteer.id} name={planeteer.name} fromUSA={planeteer.fromUSA} born={planeteer.born} bio={planeteer.bio} quote={planeteer.quote} pictureUrl={planeteer.pictureUrl} twitter={planeteer.twitter}  />)
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
