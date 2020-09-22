import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component{
  planeteers = () => {
    return this.props.planeteers.map(el => <Planeteer key={el.id} planeteers={el}/>)
  }
  render(){
    console.log("In the container: ", this.props)
    return (
      <ul className="cards">
        {this.planeteers()}
      </ul>
    )
  }

};

export default PlaneteersContainer;
