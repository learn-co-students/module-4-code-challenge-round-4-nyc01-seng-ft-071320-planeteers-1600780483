import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  const renderPeople = () => {
    return props.people.map(personObj => <Planeteer key={personObj.id} person={personObj} />)
  }

  return (
    <ul className="cards">
      {renderPeople()}
    </ul>
  )

};

export default PlaneteersContainer;
