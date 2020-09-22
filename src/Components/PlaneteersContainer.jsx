import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component{

  state = {
    planeteersArray: [],
  }



  componentDidMount(){
    fetch("http://localhost:3000/planeteers")
    .then(resp => resp.json())
    .then(planeteers => this.setState({planeteersArray: planeteers}))
  }

  planeteers = () => {
    return this.state.planeteersArray.map(planeteerObj => <Planeteer planeteerObj={planeteerObj}/>)
  }

  render(){
    
    return (
      <ul className="cards">
        {this.planeteers()}
      </ul>
    )
  
  }

  }

export default PlaneteersContainer;
