import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  renderPlaneteers = () => {
    let filteredArray = this.props.planeteers.filter(el => el.name.includes(this.props.searchTerm) || el.bio.includes(this.props.searchTerm))
    return this.props.planeteers.map(el => <Planeteer key={el.id} planeteer={el} clickHandler={this.props.clickHandler}/>)
  }

  render() {
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
