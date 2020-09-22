import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  planeteers = () => {
    return this.props.data.map(el => 
      <Planeteer key={el.id} data={el} /> )
  }

  render(){
    return (
      <ul className="cards">
        {this.planeteers()}
      </ul>
    )
  }
}
// const PlaneteersContainer = (props) => {

//   let planeteer = props.planeteers.filter(el => 
//     <Planeteer key={el.id} data={el} />  
//   )

//   return (
//     <ul className="cards">
//       {planeteer()}
//     </ul>
//   )

// };

export default PlaneteersContainer;
