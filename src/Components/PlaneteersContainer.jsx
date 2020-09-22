import React from 'react';
import Planeteer from './Planeteer'
import SearchBar from './SearchBar'

class PlaneteersContainer extends React.Component {

  renderPlaneteers = () => {
    let filterArray = this.props.planeteers.filter(el => el.name.toLowerCase().includes(this.props.searchTerm) || el.bio.toLowerCase().includes(this.props.searchTerm))
    // console.log(filterArray)
    return filterArray.map(el => <Planeteer key={el.id} planeteer={el} clickHandler={this.props.clickHandler} showBio={this.props.showBio}/>)
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
