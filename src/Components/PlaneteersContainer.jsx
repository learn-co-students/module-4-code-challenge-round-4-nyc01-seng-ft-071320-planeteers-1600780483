import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component{

  renderPlaneteers = () =>{
    return this.props.planeteers.map(ele => <Planeteer key={ele.id} planeteer={ele} />)
  }

  render(){
    return (
      <ul className="cards">
        {
          this.renderPlaneteers()
        }
      </ul>
    )
  }


};

export default PlaneteersContainer;
