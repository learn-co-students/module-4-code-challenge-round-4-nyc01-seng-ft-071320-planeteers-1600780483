import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  planeteers = () => {
    let filteredArray = this.props.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || planeteer.bio.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    if(filteredArray.length >= 1){
      return filteredArray.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/>)
    } else {
    return <h1>Sorry No Search Results Found for: {this.props.searchTerm}</h1>
    }
  }

  render() {
    return (
      <ul className="cards">
        {this.planeteers()}
      </ul>
    )
  }

};

export default PlaneteersContainer;
