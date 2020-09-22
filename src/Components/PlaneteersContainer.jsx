import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {



  planeteers = () => {
    // console.log(this.props.searchTerm)
    // console.log(this.props.planeteers)
    let filteredArray = this.props.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    // return filteredArray.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer} />)
    // debugger
    if(filteredArray.length >= 1){
      return filteredArray.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer}/>)
    } else {
    return <h1>Sorry No Search Results Found for: {this.props.searchTerm}</h1>
    }
  }

  render() {
    // console.log(this.planeteers())
    return (
      <ul className="cards">
        {this.planeteers()}

        {/* {this.planeteers()} */}
      </ul>
    )
  }

};

export default PlaneteersContainer;
