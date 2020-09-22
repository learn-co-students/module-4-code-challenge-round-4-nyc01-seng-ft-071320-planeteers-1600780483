import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {



  planeteers = () => {
    return this.props.planeteer.map(el => <Planeteer key={el.id} planeteer={el} /> )
  }
  // planeteers = () => {
  //   this.props.planeteer.map(el => console.log(el))
  // }

  render() {
    return (
      <ul className="cards">
        {
          this.planeteers()
        }
      </ul>
    )

  }


};

export default PlaneteersContainer;
