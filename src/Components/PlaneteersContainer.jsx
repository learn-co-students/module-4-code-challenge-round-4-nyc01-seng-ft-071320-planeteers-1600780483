import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  state={}

  generatePlaneteers=()=>{
    return this.props.containerArray.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/>)
  }

  render(){
    return (
      <ul className="cards">
        {
          this.generatePlaneteers()
        }
      </ul>
    )

  }

};

export default PlaneteersContainer;
