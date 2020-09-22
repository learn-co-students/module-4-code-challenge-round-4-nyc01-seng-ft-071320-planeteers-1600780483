import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  planeteers = () => {
    console.log(this.props.pArray)
    return this.props.pArray.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/>)
  }

  render() {
    console.log(this.props.pArray)
    return (
      <ul className="cards">
        {this.planeteers()}
      </ul>
    )
  }


};

export default PlaneteersContainer;
