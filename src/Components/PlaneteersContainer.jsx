import React from 'react';
import Planeteer from './Planeteer'

// changed to class
class PlaneteersContainer extends React.Component {

  state = {
    click: false
  }


  planeteersIterator = () => {
    return this.props.data.map(element => <Planeteer key={element.id} planeteer={element} click={this.state} clickHandler={this.clickHandler} />)
  }
  
  clickHandler = (event) => {
  this.state({
    click: !this.state.click
  })
  
  }
   
  render() {
    return (
    <ul className="cards">
      {
      this.planeteersIterator()
      }
    </ul>
      )
    }
};

export default PlaneteersContainer;
