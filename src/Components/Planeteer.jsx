import React from 'react';

class Planeteer extends React.Component {

  usa = () => {
    if (this.props.planeteer.fromUSA === true) {
      return "USA-based"
    } else {
      return "Working overseas"
    }
  }

  clicked = (event) => {
    console.log(event.target)
    console.log(this.props)
    return this.props.clickHandler()
  }

  bioRender = () => {
    
    if (this.props.click === true ) {
      return this.props.planeteer.bio
  
    } else {     
      return this.props.planeteer.quote
    }
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} onClick={this.clicked} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.bioRender}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>{this.usa()}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
