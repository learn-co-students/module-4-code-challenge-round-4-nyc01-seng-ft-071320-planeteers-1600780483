import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  planeteers = () => {
    return this.props.planeteers.map(el => <Planeteer key={el.id} planeteer={el}/>)
  }
  render() {
    return (
      <>
      <ul className="cards">
        {this.planeteers()}
      </ul>
      </>
    )
  }
};

export default PlaneteersContainer;
